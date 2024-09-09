import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../component/movie-seat-booking/booking';
import { Observable } from 'rxjs';
//import { userlogin } from '../component/movie-seat-booking/booking';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  apiurl="http://localhost:5271/api/Booking"

  ///1/1004/2

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      // add
    })
  }

  postbook(uid:string, mid: string , tid : string,booking:Booking):Observable<any>{
    console.log(booking);
    
    return this.http.post('http://localhost:5271/api/Booking/PostBooking/'+uid+'/'+mid+'/'+tid, JSON.stringify(booking), this.httpOptions)


  }


  
}

