import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:8000/api/';
@Injectable({
  providedIn: 'root'
})


export class UserServiceService {

  userid:any
  uid:any
  constructor(private http: HttpClient) { }
  register(user:any): Observable<any> {
    return this.http.post(AUTH_API + 'register',user);
  }
  login(user:any): Observable<any> {
    return this.http.post(AUTH_API + 'login',user);
  }
  upload(data:any):Observable<any>{
    return this.http.post(AUTH_API+'uploaddata',data)
  }
  public getDistrict(){

    return this.http.post("https://countriesnow.space/api/v0.1/countries/state/cities",{
      "country":"India",
      "state":"Kerala"
    })

  }
  addresource(data:any):Observable<any>{
    return this.http.post(AUTH_API+'add-resource',data)
  }
  
  viewallresource():Observable<any>{
    return this.http.post(AUTH_API+'view-all-resource',{})
  }
  addalert(data:any):Observable<any>{
    return this.http.post(AUTH_API+'add-alert',data)
  }
  viewallalert():Observable<any>{
    return this.http.post(AUTH_API+'view-all-alert',{})
  }
  getprediction(data:any):Observable<any>{
    return this.http.post(AUTH_API+'getprediction',data)
  }
  deleteprediction(data:any):Observable<any>{
    return this.http.post(AUTH_API+'deleteprediction',data)
  }

}
