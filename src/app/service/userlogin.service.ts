import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { UserInterface } from '../component/register/register';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserloginService {

  private currentUserSubject: BehaviorSubject<UserInterface | null>;
  public currentUser: Observable<UserInterface | null>;

  public UserLoginChange:boolean=false;

  apiUrl="http://localhost:5271/api";
  private authSecretKey = 'Bearer Token';

  httpOptions={
    
    headers: new HttpHeaders({
    
      'Content-Type' : 'application/json'
    })
  }

  constructor(private http: HttpClient,private router:Router) {
    const storedUser = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<UserInterface | null>(storedUser ? JSON.parse(storedUser) : null);
    this.currentUser = this.currentUserSubject.asObservable();
    
  }

  public get currentUserValue(): UserInterface | null {
    return this.currentUserSubject.value;
  }

  userlogin(credential:{email:string, password:string}): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/Home/UserLogin`, JSON.stringify(credential), this.httpOptions).pipe(
      map(response=>{
        try{
          return JSON.parse(response as any);
        }catch(e){
          return response;
        }
        this.UserLoginChange=true;
      }),
      catchError(error =>{
        console.error("http error:", error);
        return of({ success: false, message:"an error occured. Please try again."});
      })
    );
  }

  private setCurrentUser(user: UserInterface): void {
    this.currentUserSubject.next(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  logout(): void {
    this.UserLoginChange=false;
    this.router.navigate(['/home'])
    this.currentUserSubject.next(null);
    localStorage.removeItem('currentUser');
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
