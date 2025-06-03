import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  login(user: string, password: string, token: string = '', hashkey: string = ''): Observable<any> {
    const apiUrl = `${this.baseUrl}LOGIN/API/API_login2.php`;

    const params = new HttpParams()
      .set('request', 'login')
      .set('user', user)
      .set('password', password)
      .set('token', token)
      .set('hashkey', hashkey);

    return this.http.get(apiUrl, { params });
  }
}
