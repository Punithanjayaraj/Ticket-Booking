import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Booking } from '../component/movie-seat-booking/booking';
import { UserInterface } from '../user-interface';

@Injectable({
  providedIn: 'root'
})
export class UserdetalService {
    
  api="http://localhost:5271/api/Admin/User"

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // show user details
  getData(): Observable<any> {

    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    console.log(headers)
    return this.http.get<any>(this.api,{headers});
  } 


  cancelticketuser(bookingId:number):Observable<Booking>{
   // return this.httpClient.delete<Post>(`${this.getmoviebyid}/Movie${id}`, this.httpOptions);
    return this.http.delete<Booking>('http://localhost:5271/api/Booking/'+bookingId,this.httpOptions)
  }


  senddata(userid:string):Observable<UserInterface>{
    return this.http.get<UserInterface>('http://localhost:5271/api/Admin/User'+userid,this.httpOptions)
  }




}
