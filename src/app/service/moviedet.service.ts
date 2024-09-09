import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../component/admin/add-movie/movielist';

@Injectable({
  providedIn: 'root'
})
export class MoviedetService {

//getmovieby id

getmoviebyid='http://localhost:5271/api/Admin'



  // apiURL="http://localhost:5201/api"
getmovieapi="http://localhost:5271/api/User/GetMovies"


  apiURL="http://localhost:5271/api"
  constructor(private httpClient:HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  create(post:Post): Observable<any> {
  
  return this.httpClient.post(this.apiURL + '/Admin/Movie' , JSON.stringify(post), this.httpOptions)
    // return this.httpClient.post(this.apiURL,JSON.stringify(post) );

    
  }  

  // get movie in addin and user api

  getmovie():Observable<any>{
    return this.httpClient.get(this.getmovieapi, this.httpOptions)
  }

  //GET by id

  updatemovie(id: number, item: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return  this.httpClient.get<any>(`${this.getmoviebyid}/Movie${id}`, item);
  }
 
  updateItem(id:any,item: Post): Observable<Post> {
    return this.httpClient.put<Post>(`${this.getmoviebyid}/Movie${id}`, item);
  }


  deleteItem(id: string): Observable<Post> {
    return this.httpClient.delete<Post>(`${this.getmoviebyid}/Movie${id}`, this.httpOptions);
  }

}
