import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';
import { ApiResponse } from '../models/api-response';
import { getToken } from '../utils';

@Injectable({
  providedIn: 'root',
})
export class ListasService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

getListas(usuario: number): Observable<ApiResponse<any>> {
    const apiUrl = `${this.baseUrl}ROOT/API/API_checklist.php`;

    const params = new HttpParams()
      .set('request', 'listas')
      .set('usuario', usuario)
      .set('token', getToken());

    return this.http.get(apiUrl, { params }).pipe(
      map((response: any) => response) 
    );
  }
}
