const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// SQLite DB (persistent)
const db = new sqlite3.Database("./emails.db", (err) => {
  if (err) {
    console.error("DB error:", err);
  } else {
    console.log("Connected to SQLite DB");
  }
});

/* =========================
   TABLE 1: EMAILS
========================= */
db.run(`
  CREATE TABLE IF NOT EXISTS emails (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

/* =========================
   TABLE 2: USER QUERIES
========================= */
db.run(`
  CREATE TABLE IF NOT EXISTS user_queries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    mobile TEXT,
    service TEXT,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

/* =========================
   SAVE EMAIL
========================= */
app.post("/api/email", (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  db.run(
    "INSERT INTO emails (email) VALUES (?)",
    [email],
    function (err) {
      if (err) {
        if (err.message.includes("UNIQUE")) {
          return res.status(409).json({ message: "Email already exists" });
        }
        return res.status(500).json({ message: "DB error" });
      }

      res.status(201).json({
        id: this.lastID,
        message: "Email saved successfully"
      });
    }
  );
});

/* =========================
   SAVE USER QUERY
========================= */
app.post("/api/query", (req, res) => {
    console.log("Received query:", req.body);
  const {
    from_name,
    from_email,
    from_mobile,
    for_service,
    message
  } = req.body;

    console.log("Inserting query with values:");
  console.log("from_name:", from_name);
  console.log("from_email:", from_email);
  console.log("from_mobile:", from_mobile);
  console.log("for_service:", for_service);
  console.log("message:", message);
  if (!from_name || !from_email || !message) {
    return res.status(400).json({
      message: "Name, email and message are required"
    });
  }

  const sql = `
    INSERT INTO user_queries
    (name, email, mobile, service, message)
    VALUES (?, ?, ?, ?, ?)
  `;



  db.run(
    sql,
    [from_name, from_email, from_mobile, for_service, message],
    function (err) {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "DB error" });
      }

      res.status(201).json({
        id: this.lastID,
        message: "Query saved successfully"
      });
    }
  );
});

/* =========================
   FETCH QUERIES (OPTIONAL)
========================= */
app.get("/api/queries", (req, res) => {
  db.all(
    "SELECT * FROM user_queries ORDER BY created_at DESC",
    [],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ message: "DB error" });
      }
      res.json(rows);
    }
  );
});

/* =========================
   HEALTH CHECK
========================= */
app.get("/api/health", (_, res) => {
  res.json({ status: "OK" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
