import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private userData: any = null;

  setUserData(data: any) {
    this.userData = data;
  }

  getUserData() {
    return this.userData;
  }

  clearUserData() {
    this.userData = null;
  }

  isLoggedIn(): boolean {
    return this.userData !== null;
  }
}
