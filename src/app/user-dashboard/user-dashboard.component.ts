import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  alerts:any
  constructor(private service:UserServiceService) { }

  ngOnInit(): void {
    this.service.viewallalert().subscribe((res:any)=>{
      console.log(res)
      this.alerts=res
    })
  }

}
