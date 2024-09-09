import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor() { }

  isAuthenticated(): boolean {
    // Return true if the user is authenticated, otherwise false
    return !!localStorage.getItem('currentUser'); // Example: checking a token in local storage
  }

  private loggedIn = false;
  private userRole: string | null = null;

  login(role: string) {
    this.loggedIn = true;
    this.userRole = role;
  }

  logout() {
    this.loggedIn = false;
    this.userRole = null;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  getRole(): string | null {
    return this.userRole;
  }
}
