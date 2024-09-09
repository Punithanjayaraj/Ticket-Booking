import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterServiceService } from 'src/app/service/register-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup ;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private registerservice:RegisterServiceService,private router:Router ) {
    
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        name: ['', Validators.required,Validators.minLength(6)],
        password: ['', Validators.required],
        confrimpassword: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        contact:['',Validators.required]
      
      },
  
    );
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit(){

    console.log(this.registerForm.value);
    this.registerservice.create(this.registerForm.value).subscribe((res:any) => {
         console.log('Post created successfully!');
         console.log(res)

         this.registerForm.reset()
         alert('register successfully')

         this.router.navigateByUrl('/login');

         
        
        // this.router.navigateByUrl('post/index');
    })
  }
 
 
}
