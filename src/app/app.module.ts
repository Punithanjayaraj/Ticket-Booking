import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { MovieComponent } from './component/movie/movie.component';
import { RegisterComponent } from './component/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './component/admin/admin.component';
import { UserdetailsComponent } from './component/admin/userdetails/userdetails.component';
import { AddMovieComponent } from './component/admin/add-movie/add-movie.component';
import { AddTheaterComponent } from './component/admin/add-theater/add-theater.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { FormsModule } from '@angular/forms';
import { MovieSeatBookingComponent } from './component/movie-seat-booking/movie-seat-booking.component';
import { TheaterComponent } from './component/theater/theater.component';
import { UserdashboardComponent } from './component/userdashboard/userdashboard.component';
import { UserbookingComponent } from './component/userdashboard/userbooking/userbooking.component';
import { FooterComponent } from './component/footer/footer.component';
//import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MovieComponent,
    RegisterComponent,
    AdminComponent,
    UserdetailsComponent,
    AddMovieComponent,
    AddTheaterComponent,
    UserloginComponent,
    MovieSeatBookingComponent,
    TheaterComponent,
    UserdashboardComponent,
    UserbookingComponent,
    FooterComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 


  


  
}
