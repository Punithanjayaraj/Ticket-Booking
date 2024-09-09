import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor(private http:HttpClient ) { }

  baseurl="http://localhost:5271/api/Booking"

  getId(){
    return this.http.get(this.baseurl)
  }

}
