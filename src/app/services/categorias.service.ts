import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse } from '../models/api-response';
import { environment } from 'src/environments/environment';
import { getToken } from '../utils';

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
  private categoriasSubject = new BehaviorSubject<any[]>([]);
  categorias$ = this.categoriasSubject.asObservable();

  constructor(private httpClient: HttpClient) {}

  fetchCategorias(usuario: number): void {
    const url = 'https://bpm.desarrollogt.net/ROOT/API/API_util.php';
    const params = {
      request: 'categorias',
      usuario: usuario.toString(),
      token: getToken(),
    };
    this.httpClient
      .get<ApiResponse<Array<{ codigo: string; nombre: string }>>>(url, {
        params,
      })
      .pipe(map((response) => response.data))
      .subscribe({
        next: (data) => {
          this.categoriasSubject.next(data);
        },
        error: (err) => {
          alert('No se pudieron cargar las categorías.');
          console.log('No se pudieron cargar las categorías.', err);
        },
      });
  }

  getCategoriasValue(): any[] {
    return this.categoriasSubject.value;
  }

  getCategorias( usuario: number ): Observable <any> {
    const url = 'https://bpm.desarrollogt.net/ROOT/API/API_util.php';
    const params = { request: 'categorias', usuario: usuario.toString() } ;
    return this.httpClient.get<any>( url, {params });
  }
}
