import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor(private http: HttpClient) { }

  getHello(): Observable<string> {
    return this.http.get('http://localhost:8091/api/getHello', { responseType: 'text' });
  }
  postHello(helloMessage: string) {
    // Define HTTP headers
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // Define the request body
    const body = { helloMessage: helloMessage };

    // Perform the POST request
    return this.http.post<any>('http://localhost:8091/api/sayHello', body, { headers: headers });
  }
 
}
