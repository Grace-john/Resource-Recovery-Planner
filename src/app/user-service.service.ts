import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:8000/api/';
@Injectable({
  providedIn: 'root'
})


export class UserServiceService {

  constructor(private http: HttpClient) { }
  register(user:any): Observable<any> {
    return this.http.post(AUTH_API + 'register',user);
  }
  login(user:any): Observable<any> {
    return this.http.post(AUTH_API + 'login',user);
  }
}
