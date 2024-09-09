import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Theaterdet} from '../component/admin/add-theater/Theaterlist'

@Injectable({
  providedIn: 'root'
})
export class TheaterService {

  apiUrl="http://localhost:5271/api"

  constructor(private http:HttpClient) {

   }
   
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

//theater post 
   post(post:Theaterdet): Observable<any> { 
    return this.http.post(this.apiUrl + '/Admin/Theatre' , JSON.stringify(post), this.httpOptions)
    }  


//theater get

//http://localhost:5271/api/User/GetTheatres

get():Observable<any>{
  return this.http.get(this.apiUrl+'/User/GetTheatres')
}

//theater getby id

updatemovie(id: number, item: any): Observable<any> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return  this.http.get<any>(`${this.apiUrl}/Admin/Theatre${id}`, item);
}

//put

updateItem(id:any,item:Theaterdet ): Observable<Theaterdet> {
  return this.http.put<Theaterdet>(`${this.apiUrl}/User/GetTheatres${id}`, item);
}

//delete
deleteItem(id: string): Observable<Theaterdet> {
  return this.http.delete<Theaterdet>(`${this.apiUrl}/Admin/Theatre?id=${id}`, this.httpOptions);
}

}
