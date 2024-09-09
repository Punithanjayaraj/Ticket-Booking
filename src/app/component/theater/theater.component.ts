import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TheaterService } from 'src/app/service/theater.service';

@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.scss']
})
export class TheaterComponent implements OnInit {

  theatercard:any;
  userid:string |null=null;
  mid:string |null=null;
  constructor(private theaterservice:TheaterService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.userid = params['userid']
      this.mid = params['mid']
    })
   this.addTheater()
  }

  addTheater(){
    this.theaterservice.get().subscribe((res)=>{
     this.theatercard=res
     console.log('get is work',this.theatercard)
  })
}



}
