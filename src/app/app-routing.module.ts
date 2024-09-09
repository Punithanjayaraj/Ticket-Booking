import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';
import { MovieComponent } from './component/movie/movie.component';
import { AdminComponent } from './component/admin/admin.component';
import { UserdetailsComponent } from './component/admin/userdetails/userdetails.component';
import { AddMovieComponent } from './component/admin/add-movie/add-movie.component';
import { AddTheaterComponent } from './component/admin/add-theater/add-theater.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { MovieSeatBookingComponent } from './component/movie-seat-booking/movie-seat-booking.component';
import { TheaterComponent } from './component/theater/theater.component';
import { UserdashboardComponent } from './component/userdashboard/userdashboard.component';
import { UserbookingComponent } from './component/userdashboard/userbooking/userbooking.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',component:HomeComponent},
  {path:'movie/:id',component:MovieComponent},
  {path:'admin',component:AdminComponent,
    children: [
      { path: 'userdetail', component: UserdetailsComponent },

      { path: 'addmovie', component: AddMovieComponent },

      {path:'addTheater',component:AddTheaterComponent}
      
   ],
  },
  
  {path:'reg',component:RegisterComponent},
  {path:'login',component:UserloginComponent},
  {path:'movie/:id/theater/:id',component:TheaterComponent},
  {path:'movie/:userid/theater/:mid/booking/:tid',component:MovieSeatBookingComponent},
  {path:'booking/:id/userdash',component:UserdashboardComponent},
  {path:'booking/:id/userdash/bookingdetails',component:UserbookingComponent},
  { path: 'booking/:id/userdash/bookingdetails', component: UserdashboardComponent }, 
  {path:'myaccount',component:UserdashboardComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
