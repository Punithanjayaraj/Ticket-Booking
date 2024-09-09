import { Component, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { UserloginService } from 'src/app/service/userlogin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthserviceService } from 'src/app/service/authservice.service';
import { UserdetalService } from 'src/app/service/userdetal.service';
import { NavService } from 'src/app/service/nav.service';
import { jwtDecode } from 'jwt-decode';
// import { Dropdown, Collapse, initMDB } from 'mdb-ui-kit';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  apiData!:any
  userid!:any
  private toggleButton: any;
  private sidebarVisible: boolean;

  public placeholder:string="Login";

  constructor(public location: Location, private element : ElementRef,private userlogin :UserloginService, private router:Router,private authService:AuthserviceService,private userdetalService:UserdetalService,private route:ActivatedRoute,private navservice:NavService) {
      this.sidebarVisible = false;
  }

//   ngAfterViewInit() {
//     initMDB({ Dropdown, Collapse });
//   }

  ngOnInit() {

      const navbar: HTMLElement = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];

//fech id to navigate userdash


  }
  sidebarOpen() {
      const toggleButton = this.toggleButton;
      const html = document.getElementsByTagName('html')[0];
      // console.log(html);
      // console.log(toggleButton, 'toggle');

      setTimeout(function(){
          toggleButton.classList.add('toggled');
      }, 500);
      html.classList.add('nav-open');

      this.sidebarVisible = true;
  };
  sidebarClose() {
      const html = document.getElementsByTagName('html')[0];
      // console.log(html);
      this.toggleButton.classList.remove('toggled');
      this.sidebarVisible = false;
      html.classList.remove('nav-open');
  };
  sidebarToggle() {
      // const toggleButton = this.toggleButton;
      // const body = document.getElementsByTagName('body')[0];
      if (this.sidebarVisible === false) {
          this.sidebarOpen();
      } else {
          this.sidebarClose();
      }
  };
  isHome() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }
      if( titlee === '/home' ) {
          return true;
      }
      else {
          return false;
      }
  }
  isDocumentation() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }
      if( titlee === '/documentation' ) {
          return true;
      }
      else {
          return false;
      }
  }

  change(){
    if(this.userlogin.UserLoginChange){
        this.router.navigate(['/userdash'])
        this.placeholder="Login";
        if(this.placeholder){
            
        }
    }
    else{
        this.router.navigate(['/login'])
        this.placeholder="Login";
    }
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
   

  }

  getRole(): string | null {
    return this.authService.getRole();
  }

  
  logout() {
    
    this.authService.logout();
    this.router.navigate(['/home']);
    //this.updatePlaceholder();

  }
  

  userdash(){
   
}
}