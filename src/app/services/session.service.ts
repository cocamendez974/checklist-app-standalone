import { Injectable } from '@angular/core';

const STORAGE_KEY = 'sessionUserData';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private userData: any = null;

  constructor() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        this.userData = JSON.parse(stored);
      } catch {
        this.userData = null;
      }
    }
  }

  setUserData(data: any) {
    this.userData = data;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  getUserData() {
    return this.userData;
//     {
//   "codigo": "2",
//   "nombre": "Oscar Méndez",
//   "mail": "softwareandhardware.cuantica@gmail.com",
//   "telefono": "45512300",
//   "rol": "1",
//   "rol_nombre": "Super-Administrador",
//   "url_foto": "https:///CONFIG/Fotos/nofoto.png",
//   "sedes_in": "",
//   "categorias_in": ""
// }
  }

  clearUserData() {
    this.userData = null;
    localStorage.removeItem(STORAGE_KEY);
  }

  isLoggedIn(): boolean {
    return this.userData !== null;
  }

  getUserCode(): string | null {
    const userData = this.getUserData();
    return userData?.codigo ?? null;
  }
}
