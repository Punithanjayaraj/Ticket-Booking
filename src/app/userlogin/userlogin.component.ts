import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserloginService } from '../service/userlogin.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { AuthserviceService } from '../service/authservice.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss'],
})
export class UserloginComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private userService: UserloginService,
    private router: Router,
    private authService: AuthserviceService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  loginUser(): void {
    if (this.form.valid) {
      const credentials = {
        email: this.form.value.email,
        password: this.form.value.password,
      };

      this.userService.userlogin(credentials).subscribe(
        (response: any) => {
          if (response.success) {
            console.log(response, 'hijoko');
            let decode: any = jwtDecode(response.user); 
            let roles =
              decode[
                'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
              ];

            console.log(roles);

            console.log(decode, 'decode');

            localStorage.setItem('token', response.user);
            // let base64Url = decode.split('.')[1];
            // let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            // let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            //     return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            // }).join(''));
            // return JSON.parse(jsonPayload);

            if (roles === 'Admin') {
              this.router.navigateByUrl('/admin');
              this.authService.login('Admin');
              alert('login sucess');
            } else if (roles === 'User') {
              this.router.navigateByUrl('/movie/' + decode.Id);
              this.authService.login('User');
              console.log(response, 'dfsf');
              alert('login success'); 
            }
          } else {
            console.error('Login failed:', response.message);
            alert('login failed');
            // Handle login failure (display error message, etc.)
          }
        },
        (error) => {
          console.error('HTTP error:', error);
          // Handle HTTP error (display error message, etc.)
        }
      );
    } else {
      console.error('Form is invalid.');
      // Handle form validation error (display error message, etc.)
    }
  }

  goto(){
    this.router.navigate(['/reg']);
  }
}
