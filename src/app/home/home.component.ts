import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let pass = group.get('password')?.value
    let confirmPass = group.get('confirm_password')?.value
    return pass === confirmPass ? null : { notSame: true }
  }
  registration=new FormGroup({
    fullname:new FormControl('',[
      Validators.required
    ]),
    username:new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    phone:new FormControl('',[
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      
      
    ]),
   
    password:new FormControl('',[
      Validators.required,
      Validators.minLength(6)
    ]),
    confirm_password:new FormControl('',[
      Validators.required,
      Validators.minLength(6)
    ])
    
  },{validators:this.checkPasswords})

  get fullname(){
    return this.registration.get('fullname')

  }
  get username(){
    return this.registration.get('username')

  }
  get phone(){
    return this.registration.get('phone')

  }
  get password(){
    return this.registration.get('password')
  }
  get confirm_password(){
    return this.registration.get('confirm_paswword')
  }
  constructor() { }
  register(){
    console.log(this.registration.value)
  }

  ngOnInit(): void {
  }

}
