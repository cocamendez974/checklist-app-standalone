import { Injectable } from '@angular/core';
import { getToken } from '../utils';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs';
import { ApiResponse } from '../models/api-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListaService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  newRevision(lista: number, programacion: number, fecha: string, hora: string ) : Observable <ApiResponse <any> > {
    const apiUrl = `${this.baseUrl}ROOT/API/API_checklist.php`;

    const params = new HttpParams()
      .set('request', 'new_revision')
      .set('lista', lista)
      .set('programacion', programacion)
      .set('fecha', fecha)
      .set('hora', hora)
      .set('token', getToken());

    return this.http
      .get(apiUrl, { params })
      .pipe(map((response: any) => response));
  }
}


