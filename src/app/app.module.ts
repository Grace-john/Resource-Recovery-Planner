import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { UploaddataComponent } from './uploaddata/uploaddata.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserNavComponent } from './user-nav/user-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeNavComponent,
    HomepageComponent,
    FooterComponent,
    UploaddataComponent,
    PersonDetailsComponent,
    UserDashboardComponent,
    UserNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
