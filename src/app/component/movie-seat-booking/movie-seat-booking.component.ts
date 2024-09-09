import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouteReuseStrategy } from '@angular/router';
import { BookService } from 'src/app/service/book.service';
import { GetdetailsbyidService } from 'src/app/service/getdetailsbyid.service';

@Component({
  selector: 'app-movie-seat-booking',
  templateUrl: './movie-seat-booking.component.html',
  styleUrls: ['./movie-seat-booking.component.scss']
})
export class MovieSeatBookingComponent {

  form!:FormGroup
  currentStep: number = 1;
  post:any;
  userid!:string;
  mid!:string;
  tid!:string;
  data:any;
  movieName:string|null=null;
  bookingId:string|null=null;
  theaterName:number|null=null;
  showtime:number|null=null;
  numberOfTickets:number|null=null;
  price:number|null=null;
  bookingdetails:[]=[]
  movieimg:string|null=null

  constructor(private fb:FormBuilder,
    private bookingService:BookService,
    private router:Router,
    private route:ActivatedRoute,private ticketgen:GetdetailsbyidService
  ){
this.form=this.fb.group({

  showtime:['',[Validators.required]],
  numberOfTickets:['',[Validators.required],[Validators.min(1)]],
  paymentMode:['',[Validators.required]]

})
  }

  nextStep() {
    if (this.currentStep < 4) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  resetSteps() {
    this.currentStep = 1;
  }

  currentDate!: string;
  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.userid = params['userid'];
      this.mid = params['mid'];
      this.tid = params['tid'];
      console.log(this.userid);
      console.log(this.mid);
      console.log(this.tid);

    });

    const date = new Date();
    // Add 2 days to the current date
    date.setDate(date.getDate() + 2);
    this.currentDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  
    
  }


  submit(){
    this.bookingService.postbook(this.userid,this.mid, this.tid,this.form.value).subscribe((res)=>{

      this.post=res;
      console.log(res) 
      this.action()

    })
  }

  action(){

    this.ticketgen.getdata(this.userid).subscribe((res)=>{

      console.log(res);
      let details:any[]=res;

      for(let i=0;i<details.length; i++)
      {
         this.movieName=details[details.length-1].movieTitle
         this.bookingId=details[details.length-1].bookingId
         this.numberOfTickets=details[details.length-1].numberOfTickets
         this.price=details[details.length-1].price
         this.showtime=details[details.length-1].showtime
         this.theaterName=details[details.length-1].theaterName
         this.movieimg=details[details.length-1].movieimg

      }




    })

   // alert('booking is successfully')
    
  }

  sendticket(){
     this.router.navigateByUrl('booking/'+this.userid+'/userdash')
  }


}


// booking/2/userdash