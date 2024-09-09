import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TheaterService } from 'src/app/service/theater.service';
import { Theaterdet } from './Theaterlist';

@Component({
  selector: 'app-add-theater',
  templateUrl: './add-theater.component.html',
  styleUrls: ['./add-theater.component.scss'],
})
export class AddTheaterComponent {
  gettheaterbyid: any;
  TheatreName: any;
  Location: any;
  ImageUrl: any;
 // imageUrl: any;
  Description: any;
  updateval: any;
  editform!: FormGroup;
  theatercard: any;
  form!: FormGroup;
  item: any[] = [];
  title: any;
  theatres: Theaterdet[]=[];

  constructor(private Theaterservice: TheaterService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      theatreName: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),
    });

    this.editform=new FormGroup({
      theatreName: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),

    })
    this.addTheater()
  }

  


  //post
  submit() {
    this.Theaterservice.post(this.form.value).subscribe((res: any) => {
      console.log('success');
      console.log(res);
      this.addTheater()
      this.form.reset();
});
  }


  //get
  addTheater(){
      this.Theaterservice.get().subscribe((res)=>{
       this.theatercard=res
       console.log('get is work',this.theatercard)
    })
  }

  //theter get by id

  update(id:number){
    this.Theaterservice.updatemovie(id,this.addTheater).subscribe((res)=>{
      this.gettheaterbyid=res
      console.log(res)
     // console.log(this.)
      console.log(this.gettheaterbyid,'jai')
      this.addTheater(); 
     // console.log(this.gettheaterbyid.) 
      this.TheatreName=this.gettheaterbyid.theatreName
      this,this.Location=this.gettheaterbyid.location
      this.ImageUrl=this.gettheaterbyid.imageUrl
     
   })
}

//updatemovie

sub(){

    if(this.gettheaterbyid){
    this.Theaterservice.updateItem(this.gettheaterbyid.id,this.editform.value).subscribe(updatedItem => {
      // const index = this.item.findIndex(i => i.id === updatedItem.id);
      console.log(updatedItem,'jhjksdjksd')    
    });
}
}



deleteItem(id: number) {
  this.Theaterservice.deleteItem(id.toString()).subscribe(() => {
    console.log("deleted");
    this.addTheater()
  });
}


close(){}

}
