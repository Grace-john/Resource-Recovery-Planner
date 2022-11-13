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
    district:new FormControl('',[Validators.required]),
    resourcetype:new FormControl('',[Validators.required]),
    city:new FormControl('',[Validators.required]),
    resource_owner:new FormControl('',[Validators.required]),
    email:new FormControl()



  })
  getDetails(){
    //this.service.userid
    this.resource.value.email=this.service.userid
    console.log(this.resource.value)
    this.service.upload(this.resource.value).subscribe((res:any)=>{
      console.log(res)
      alert(res.msg)
    })
    
  }

  constructor(private service:UserServiceService) { }

  ngOnInit(): void {
  }

}
