import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import { MoviedetService } from 'src/app/service/moviedet.service';
import {  ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent {
  //@ViewChild('myModal') modal: ElementRef;
  getbyid:any;
  ticketsAvailable:any
  duration:any
  genre:any
  imageUrl:any
  Description:any
  updateval:any
  editform!:FormGroup
  moviecard:any;
  form!: FormGroup;
item:any[]=[]
  title:any;
  constructor(private movielist:MoviedetService,private getmovie:MoviedetService,modal:ElementRef){
    
  }


  

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
      totalticketsavailable: new FormControl('', Validators.required),
      genre: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),
      
 
    });

    this.editform=new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
      totalticketsavailable: new FormControl('', Validators.required),
      genre: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),

    })
    this.addmoviecard()

    this.sub();

    // this.updateval=this.getmovie.updatemovie()

    
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.movielist.create(this.form.value).subscribe((res:any) => {
         console.log("success");
         console.log(res)    
  //this.addmoviecard()
  
  this.form.reset()
  this.addmoviecard(); 
      //   this.router.navigateByUrl('post/index');
    })
  }
  addmoviecard(){
    this.getmovie.getmovie().subscribe((res)=>{
     this.moviecard=res
     console.log('get is work')
    })
  }

  update(id:number){

    this.getmovie.updatemovie(id,this.addmoviecard).subscribe((res)=>{
      this.getbyid=res
      console.log(this.getbyid)
    
      console.log(this.getbyid.title) 
      this.title=this.getbyid.title
      this.ticketsAvailable=this.getbyid.totalTicketsAvailable
      this.duration=this.getbyid.duration
      this.genre=this.getbyid.genre
      this.imageUrl=this.getbyid.imageUrl
      this.Description=this.getbyid.description
      console.log(this.title)
      //console.log(this.getbyid.title)  


    })
    
  }

  sub(){
    if(this.getbyid){
    this.getmovie.updateItem(this.getbyid.id,this.editform.value).subscribe(updatedItem => {
      // const index = this.item.findIndex(i => i.id === updatedItem.id);
      console.log(updatedItem,'jhjksdjksd')    
    });

    alert

    this.close()
  }
   
  }

close(){

}

deleteItem(id: number) {
  this.getmovie.deleteItem(id.toString()).subscribe(() => {
   console.log("deleted");
   this.addmoviecard();
   
  });
}





}
