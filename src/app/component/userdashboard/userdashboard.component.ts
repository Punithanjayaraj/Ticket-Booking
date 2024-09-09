import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/service/app.service';
import { GetdetailsbyidService } from 'src/app/service/getdetailsbyid.service';
import { UserdetalService } from 'src/app/service/userdetal.service';
import { UserloginService } from 'src/app/service/userlogin.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.scss']
})
export class UserdashboardComponent {
  apiData:any;
  selectedBooking:any;
  userid:string|null=null;
 
  constructor(private userdetalService: UserdetalService, private route:ActivatedRoute , private routes:Router,  private router:Router, private userlogin:UserloginService){}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userid = params.get('id');
      if(this.userid)
      {
      this.userdetalService.senddata(this.userid).subscribe((res)=>{
        this.apiData=res
        console.log(this.userid,'jhcdgsdg')
        console.log(res);
        console.log(this.apiData,'fdsfasdfasd')      
       })
     }
    });
    
  }
 
  
  logout(){
    alert("logout")
 localStorage.clear();
this.routes.navigateByUrl('/login')
    this.userlogin.logout();
  }

  
// showdetailsuser(){
//   this.
// }

}


