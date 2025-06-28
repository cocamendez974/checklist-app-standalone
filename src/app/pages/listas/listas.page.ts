import { ListasService } from '../../services/listas.service';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { getCurrentDate, getCurrentTime, getToken } from '../../utils';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.page.html',
  styleUrls: ['./listas.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class ListasPage {
  listas: any[] = [];
  filteredListas: any[] = [];
  searchText: string = '';
  sortOrders: { [key: string]: boolean } = {
    numero: true,
    nombre: true,
    categoria: true,
    estado: true,
  };

  constructor(
    private listasService: ListasService,
    private sessionService: SessionService,
    private router: Router,
    private httpClient: HttpClient
  ) {}

  ionViewWillEnter() {
    requestAnimationFrame(() => {
      if (!this.sessionService.isLoggedIn()) {
        this.router.navigate(['/login']);
        return;
      }

      const userData = this.sessionService.getUserData();
      const usuario = userData.codigo;

      console.log(JSON.stringify(userData, null, 2));

      this.listasService.getListas(usuario).subscribe({
        next: (response) => {
          console.dir(response.data);
          this.listas = response.data.map((item: any, index: number) => ({
            numero: index + 1,
            nombre: item.nombre_lista,
            categoria: item.categoria,
            estado: item.estado,
            ...item,
          }));
          this.filterListas();
        },
        error: (err) => {
          alert('No se pudieron cargar las listas.');
          console.error('Error al cargar listas:', err);
        },
      });
    });
  }

  filterListas() {
    const filter = this.searchText?.toLowerCase() || '';
    this.filteredListas = this.listas.filter(
      (lista) =>
        (lista.nombre || '').toLowerCase().includes(filter) ||
        (lista.categoria || '').toLowerCase().includes(filter) ||
        (lista.estado || '').toLowerCase().includes(filter)
    );
  }

  sortBy(field: 'numero' | 'nombre' | 'categoria' | 'situacion') {
    this.sortOrders[field] = !this.sortOrders[field];
    const order = this.sortOrders[field] ? 1 : -1;
    var valA: number | string;
    var valB: number | string;
    this.filteredListas.sort((a, b) => {
      if (field == 'numero') {
        valA = a[field] || '';
        valB = b[field] || '';
      } else {
        valA = (a[field] || '').toString().toLowerCase();
        valB = (b[field] || '').toString().toLowerCase();
      }

      if (valA < valB) return -1 * order;
      if (valA > valB) return 1 * order;
      return 0;
    });
  }

  entrarLista(item: any) {
    const lista = item.codigo_lista;
    const programacion = item.codigo_programacion;
    const userData = this.sessionService.getUserData();
    const usuario = userData.codigo;
    const fecha = getCurrentDate();
    const hora = getCurrentTime();
    const categoria = item.categoria;
    const estado = item.situacion;
    const revision = item.revision;

    if (estado === 'Iniciada') {
      this.abrirRevisionExistente(item);
    } else {
      this.crearNuevaRevision(item);
    }

    this.router.navigate(['/lista'], {
      state: {
        lista,
        programacion,
        categoria,
        usuario,
        estado,
        revision,
      },
    });
  }

  abrirRevisionExistente(item: any) {
    console.log('existente');
  }

  crearNuevaRevision(item: any) {
    console.log('nueva');
  }
}
