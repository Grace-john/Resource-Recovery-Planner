import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  resource=new FormGroup({
    resource_name:new FormControl('',[Validators.required]),
    resource_quantity:new FormControl('',[Validators.required]),
    resource_type:new FormControl('',[Validators.required]),
    email:new FormControl()



  })
  getDetails(){
    //this.service.userid
    this.resource.value.email=this.service.userid
    console.log(this.resource.value)
    // this.service.upload(this.resource.value).subscribe((res:any)=>{
    //   console.log(res)
    //   alert(res.msg)
    // })
    this.service.addresource(this.resource.value).subscribe((res:any)=>{
      console.log(res)
      alert("Resource added successfully")
      this.ngOnInit()
    })
    
  }

  constructor(private service:UserServiceService) { }

  ngOnInit(): void {
  }

}
