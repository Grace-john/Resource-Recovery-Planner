import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
alert=false
msg=""
reg=false
districts:any
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
    
    house:new FormControl('',[Validators.required]),
    place:new FormControl('',[Validators.required]),
   
    pincode:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(6)]),
    usertype:new FormControl(),

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
  get house(){
    return this.registration.get('house')

  }
  get place(){
    return this.registration.get('place')

  }
  
  get pincode(){
    return this.registration.get('pincode')

  }
  get usertype(){
    return this.registration.get('usertype')

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
  constructor(private service:UserServiceService) { }
  register(){
    console.log(this.registration.value)
    this.service.register({"name":this.registration.value.fullname,"email":this.registration.value.username,"phone":this.registration.value.phone,"password":this.registration.value.password,"house":this.registration.value.house,"place":this.registration.value.place,"pincode":this.registration.value.pincode,"usertype":this.registration.value.usertype}).subscribe((res:any)=>{
      console.log(res)
      this.reg=true
    },error=>{
      this.alert=true
      console.log(error.error.msg)
      this.msg=error.error.msg
    })

  }

  ngOnInit(): void {
    this.service.getDistrict().subscribe((res:any)=>{
      console.log(res)
      this.districts=res.data
    })
  }

}
