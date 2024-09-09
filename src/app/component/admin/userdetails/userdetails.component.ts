import { Component, OnInit } from '@angular/core';
import { UserdetalService } from 'src/app/service/userdetal.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {

  img='../../../../assets/img/userlogo.jpg'

  userdinfo:any;



  constructor(private userdetail:UserdetalService){

  }
  ngOnInit(): void {
  this.userdata()
  }

  userdata(){
    this.userdetail.getData().subscribe((res)=>{
     this.userdinfo=res
     console.log(this.userdinfo)
    })
  }
}
