import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-view-shelters',
  templateUrl: './view-shelters.component.html',
  styleUrls: ['./view-shelters.component.css']
})
export class ViewSheltersComponent implements OnInit {
shelters:any
  constructor(private service:UserServiceService) { }

  ngOnInit(): void {
    this.service.viewallshelter({}).subscribe((res:any)=>{
      console.log(res)
      this.shelters=res
    })
  }

}
