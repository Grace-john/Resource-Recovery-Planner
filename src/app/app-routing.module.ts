import { ViewAlertComponent } from './view-alert/view-alert.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAlertComponent } from './add-alert/add-alert.component';
import { HomeComponent } from './home/home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { UploaddataComponent } from './uploaddata/uploaddata.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ViewResourcesComponent } from './view-resources/view-resources.component';
import { VolunteerDashboardComponent } from './volunteer-dashboard/volunteer-dashboard.component';
import { AddPredictionDetailsComponent } from './add-prediction-details/add-prediction-details.component';

const routes: Routes = [
  {path:'register',component:HomeComponent},
  {path:'',component:HomepageComponent},
  {path:'upload',component:UploaddataComponent},
  {path:'personal-details',component:PersonDetailsComponent},
  {path:'user-dashboard',component:UserDashboardComponent},
  {path:'volunteer-dashboard',component:VolunteerDashboardComponent},
  {path:'view-resource',component:ViewResourcesComponent},
  {path:'add-alert',component:AddAlertComponent},
  {path:'view-all-alert',component:ViewAlertComponent},
  {path:'add-prediction-details',component:AddPredictionDetailsComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
