import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {


  constructor(private routes:Router){}

 
    logout(){
   
      localStorage.clear();
      this.routes.navigateByUrl('/login')
  
    }
  }


  

