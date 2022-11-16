import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-view-resources',
  templateUrl: './view-resources.component.html',
  styleUrls: ['./view-resources.component.css']
})
export class ViewResourcesComponent implements OnInit {

  resources:any
  constructor(private service:UserServiceService) { }

  ngOnInit(): void {
    this.service.viewallresource().subscribe((res:any)=>{
      console.log(res)
      this.resources=res
    })
  }

}
