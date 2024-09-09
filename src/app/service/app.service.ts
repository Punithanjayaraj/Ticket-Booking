import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

    apiurl="http://localhost:5271/api/Booking/"

  constructor(private http:HttpClient) { }

  getata(userid:string):Observable<any>{
      //http://localhost:5271/api/Booking/12
      const url=`${this.apiurl}${userid}`;
      return this.http.get<any>(url);
  }
}
