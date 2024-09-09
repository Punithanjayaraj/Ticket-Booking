import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/service/app.service';
import { UserdetalService } from 'src/app/service/userdetal.service';

@Component({
  selector: 'app-userbooking',
  templateUrl: './userbooking.component.html',
  styleUrls: ['./userbooking.component.scss']
})
export class UserbookingComponent {

  apiData:any;
  selectedBooking:any;
  userid:string|null=null;
 
  constructor(private appService: AppService, private route:ActivatedRoute , private routes:Router,private userdelservice:UserdetalService){}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const userid = params.get('id');

      if(userid)
      {
        this.getAta(userid);
     }
    });
    
  }

  getAta(userid:string){
    this.appService.getata(userid).subscribe((res)=>{
      this.apiData=res
      console.log(this.userid,'jhcdgsdg')
      console.log(res);
      console.log(this.apiData,'fdsfasdfasd')
      
     })
  }
  logout(){
    localStorage.clear();
    this.routes.navigateByUrl('/login');
  }

  ondelete(data:any):void{
    if(confirm("Do you really want to cancel booking?")){
    this.userdelservice.cancelticketuser(data.bookingId).subscribe(res =>{
       console.log('delete successfully',res);
    
  
    });
  }else{
    console.log("Booking canceled")
  }
      
  }
  }


