import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink, IonTitle } from '@ionic/angular/standalone';
// import { addIcons } from 'ionicons';
// import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';
import { CategoriasService } from './services/categorias.service';
import { AsyncPipe } from '@angular/common';
import { NgIf } from '@angular/common';
import { getSacEmail } from './utils';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [IonTitle, RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet, AsyncPipe, NgIf],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: 'dashboard', icon: 'bar-chart'},
    { title: 'Listas para Registrar', url: 'listas', icon: 'clipboard'},
    { title: 'Checklist', url: 'lista', icon: 'checkbox'},
    { title: 'Resultados', url: 'resultados', icon: 'checkmark-done'}
  ];

  public sacEmail = getSacEmail();

  categorias$ = this.categoriasService.categorias$;

  constructor(private categoriasService: CategoriasService) {
    this.categoriasService.fetchCategorias(2);
  }
  
}

