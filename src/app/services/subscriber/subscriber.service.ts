import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
// export class SubscriberService {

//   // Use environment variables
//   apiUrl = environment.apiUrl;
//   azureFunctionKey = environment.azureFunctionKey;
// // Azure Function URL
//   private url = `${this.apiUrl}/api/AddSubscribers?code=${this.azureFunctionKey}`;
//   constructor(private http: HttpClient) { }

//    // Method to save subscriber email
//    saveSubscriberEmail(email: string): Observable<any> {
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json'
//     });

//     // Construct the body as a JSON object
//     const body = {
//       email: email   // This will send { "email": "abc.com" }
//     };

//     // Make the POST request
//     console.log(this.url);
//     return this.http.post(this.url, body, { headers: headers, responseType: 'text' });
//   }
// }
export class SubscriberService {

  constructor(private http: HttpClient) { }

  // Meathod to save subscriber email
  saveSubscriberEmail(email: string): Observable<any> {

    

    //save email inmemory
    const url = `http://localhost:3000/api/email`;
  
    // Construct the body as a JSON object
    const body = {
      email: email   // This will send { "email": "abc.com" }
    };

    // Construct the header of request
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    
    console.log('Subscriber email saved:', email);
    return this.http.post(url, body, { headers: headers, responseType: 'text' });
  }
} 