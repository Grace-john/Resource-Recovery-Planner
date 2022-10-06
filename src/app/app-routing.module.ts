import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { UploaddataComponent } from './uploaddata/uploaddata.component';

const routes: Routes = [
  {path:'register',component:HomeComponent},
  {path:'',component:HomepageComponent},
  {path:'upload',component:UploaddataComponent},
  {path:'personal-details',component:PersonDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }