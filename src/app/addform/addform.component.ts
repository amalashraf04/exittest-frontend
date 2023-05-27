import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackendService } from '../backend.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent {
  User = {
    email:""
  }
  constructor(private router:Router,private fb:FormBuilder,private api:BackendService,private http: HttpClient){}
 
  ngOnInit(): void {
  }

  onsubmit(){
    this.api.saveEmail({"email":this.User.email}).subscribe((data)=>{
      console.log(data)
    })
    localStorage.setItem("email",this.User.email)
    this.router.navigate(['add-otp'])

  }
}
