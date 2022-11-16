import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
alert=false
msg=""
  loginform=new FormGroup({
    username:new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    password:new FormControl('',Validators.required),
  })
  get username(){
    return this.loginform.get('username');
  }
  get password(){
    return this.loginform.get('password');
  }
  login(){
    console.log(this.loginform.value)
    this.service.login({"email":this.loginform.value.username,"password":this.loginform.value.password}).subscribe((res:any)=>{
      console.log(res)
      this.alert=false
      this.service.userid=res.email
      if(res.usertype=="user"){
        this.router.navigateByUrl("/user-dashboard")

      }
      if(res.usertype=="volunteer"){
        this.router.navigateByUrl("/volunteer-dashboard")

      }
      
     
      
    },error=>{
      this.alert=true
      console.log(error.error.msg)
      this.msg=error.error.msg
    })

  }
  constructor(private service:UserServiceService,private router:Router) { }

  ngOnInit(): void {
  }

}
