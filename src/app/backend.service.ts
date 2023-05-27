import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http:HttpClient) { }
   //api='http://localhost:2341/api'

  api:String = `api`

  saveEmail(email:any){
    console.log(email)
    return this.http.post(`${this.api}/email`,email)
  }
  checkOTP(otp:any){
    return this.http.post(`${this.api}/otp`,otp)
  }
}
