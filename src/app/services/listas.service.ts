import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';
import { ApiResponse } from '../models/api-response';

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
      .set('domain', environment.domain);

    return this.http.get(apiUrl, { params }).pipe(
      map((response: any) => response) // <--- this line is the key
    );
  }
}
