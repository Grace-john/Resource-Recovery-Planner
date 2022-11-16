import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-add-alert',
  templateUrl: './add-alert.component.html',
  styleUrls: ['./add-alert.component.css']
})
export class AddAlertComponent implements OnInit {
  alert=new FormGroup({
    alert_description:new FormControl('',[Validators.required]),
    alert_place:new FormControl('',[Validators.required]),
    alert_type:new FormControl('',[Validators.required]),
    alert_date:new FormControl('',[Validators.required]),
    email:new FormControl()



  })
  constructor(private service:UserServiceService) { }
  getDetails(){
    //this.service.userid
    this.alert.value.email=this.service.userid
    console.log(this.alert.value)
    // this.service.upload(this.resource.value).subscribe((res:any)=>{
    //   console.log(res)
    //   alert(res.msg)
    // })
    this.service.addalert(this.alert.value).subscribe((res:any)=>{
      console.log(res)
      alert("Alert added successfully")
      this.ngOnInit()
    })
    
  }

  ngOnInit(): void {
  }

}
