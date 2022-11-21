import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-add-shelter',
  templateUrl: './add-shelter.component.html',
  styleUrls: ['./add-shelter.component.css']
})
export class AddShelterComponent implements OnInit {
shelters:any
  shelter=new FormGroup({
    shelter_place:new FormControl('',[Validators.required]),
    shelter_strength:new FormControl('',[Validators.required]),
    email:new FormControl()



  })
  addshelter(){
    console.log(this.shelter.value)
    this.shelter.value.email=this.service.userid
    this.service.addshelter(this.shelter.value).subscribe((res:any)=>{
      console.log(res)
      alert("Details added")
    })
  }
  constructor(private service:UserServiceService) { }

  ngOnInit(): void {
    this.service.viewshelter({"email":this.service.userid}).subscribe((res:any)=>{
      console.log(res)
      this.shelters=res

    })
  }

}
