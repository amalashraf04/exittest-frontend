import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackendService } from '../backend.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otpform',
  templateUrl: './otpform.component.html',
  styleUrls: ['./otpform.component.css']
})
export class OtpformComponent {
  User = {
    otp: '',
  };

  constructor(private api:BackendService,private http: HttpClient,private router:Router) { }

  ngOnInit() {
    
  }
  Verify(){
    this.api.checkOTP({email:localStorage.getItem("email"),otp:this.User.otp}).subscribe((data)=>{
      if(data != null){
        alert("Success")
        this.router.navigate([''])
      }
      else{
        alert("Incorrect OTP")
      }
      
    })


  }

}
