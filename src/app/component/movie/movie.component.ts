import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MoviedetService } from 'src/app/service/moviedet.service';
import { TheaterService } from 'src/app/service/theater.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {


  MoviesDisplay:any[]=[]
  moviecard:any
  addTheater:any
  gettheaterbyid:any
  userid:number |null=null;



  constructor(private getmovie:MoviedetService,
    private router: Router,
    private Theaterservice: TheaterService,
    private route: ActivatedRoute
  ){
  }
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.userid = +params['userid'];
    })
    this.addmoviecard()
  }


  addmoviecard(){
    this.getmovie.getmovie().subscribe((res)=>{
     this.moviecard=res
     console.log('get is work')
    })
  }
  
  update(id:number){
    this.Theaterservice.updatemovie(id,this.addTheater).subscribe((res)=>{
      this.gettheaterbyid=res
      console.log(res)
     // console.log(this.)
      console.log(this.gettheaterbyid,'jai')
   
     // console.log(this.gettheaterbyid.) 
     
   
   })

}
 
//my user



}
