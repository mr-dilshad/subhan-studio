import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmailService {
  
  constructor(private http: HttpClient) { }

  saveUserQuery(formData: any): Observable<any> {

    //save user query
    const url = `http://localhost:3000/api/query`;
      
    // Construct the body as a JSON object
    const body = {
      from_name: formData.from_name,
      from_email: formData.from_email,
      from_mobile: formData.from_mobile,
      for_service: formData.for_service,
      message: formData.message
    };

    // Construct the header of request
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
    return this.http.post(url, body, { headers: headers, responseType: 'text' });
  }
}
