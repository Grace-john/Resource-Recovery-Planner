import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-add-prediction-details',
  templateUrl: './add-prediction-details.component.html',
  styleUrls: ['./add-prediction-details.component.css']
})
export class AddPredictionDetailsComponent implements OnInit {
  result=false
  prediction=""
  rainfall=new FormGroup({
    year:new FormControl('',[Validators.required]),
    jan:new FormControl('',[Validators.required]),
    feb:new FormControl('',[Validators.required]),
    mar:new FormControl('',[Validators.required]),
    apr:new FormControl('',[Validators.required]),
    may:new FormControl('',[Validators.required]),
    jun:new FormControl('',[Validators.required]),
    jul:new FormControl('',[Validators.required]),
    aug:new FormControl('',[Validators.required]),
    sep:new FormControl('',[Validators.required]),
    oct:new FormControl('',[Validators.required]),
    nov:new FormControl('',[Validators.required]),
    dec:new FormControl('',[Validators.required]),
    email:new FormControl(),

  })
  sendData(){
    this.rainfall.value.email=this.service.uid
    console.log(this.rainfall.value)
    this.service.upload(this.rainfall.value).subscribe((res:any)=>{
      console.log(res)
      alert("Details added successfully")
      this.result=true
      this.prediction="Loading...."
     
      setTimeout(() => {
        this.service.getprediction({"userid":this.service.uid}).subscribe((res:any)=>{
          console.log(res)
          if(res[0].prediction==1){
            this.prediction="Chance of Flood is high"
          }
         else{
            this.prediction="No chance of Flood"
          }
        })
        this.service.deleteprediction({"userid":this.service.uid}).subscribe((res:any)=>{
          console.log(res)
        })
      }, 25000);
    })
  }
  constructor(private service:UserServiceService) { }

  ngOnInit(): void {
    console.log(this.service.uid)
  }

}