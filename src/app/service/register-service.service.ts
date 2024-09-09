import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Register } from '../component/register/register';



@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
  httpClient: any;

 

  constructor(private http: HttpClient) { }

  private apiURL = "http://localhost:5271/api";
    

  //Http Header Options
 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  //Post 

  create(user:Register): Observable<any> {

    //http://localhost:5271/api/Home/UserRegister
  
    return this.http.post(this.apiURL+'/Home/UserRegister' , JSON.stringify(user), this.httpOptions)
 
      
    
  }  



  //update
  update(id:number, post:Register): Observable<any> {
  
    return this.http.put(this.apiURL + '/posts/' + id, JSON.stringify(post), this.httpOptions)
 
    .pipe( 
      catchError(this.errorHandler)
    )
  }
       
 



  //delete
  delete(id:number){
    return this.http.delete(this.apiURL + id, this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }





  //Error program

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }


   
}
