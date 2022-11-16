import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-volunteer-dashboard',
  templateUrl: './volunteer-dashboard.component.html',
  styleUrls: ['./volunteer-dashboard.component.css']
})
export class VolunteerDashboardComponent implements OnInit {
alerts:any
  constructor(private service:UserServiceService) { }

  ngOnInit(): void {
    this.service.viewallalert().subscribe((res:any)=>{
      console.log(res)
      this.alerts=res
    })
  }

}
