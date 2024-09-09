import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetdetailsbyidService {

  apiurl="http://localhost:5271/api/Booking/"



  constructor(private http:HttpClient) { }


   getdata(userid:string):Observable<any>{

    return this.http.get(this.apiurl+userid)
    
   }

}
