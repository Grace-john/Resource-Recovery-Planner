import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

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
    resource_owner:new FormControl('',[Validators.required])


  })
  getDetails(){
    console.log(this.resource.value)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
