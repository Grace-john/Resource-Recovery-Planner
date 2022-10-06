import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

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
  }
  constructor() { }

  ngOnInit(): void {
  }

}
