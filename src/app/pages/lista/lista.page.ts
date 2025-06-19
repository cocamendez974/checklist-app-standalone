import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
  standalone: true,
  // imports: [IonButtons, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonicModule]
  imports: [IonicModule]
})
export class ListaPage implements OnInit {

  listaNumero: any;
  programacion: any;
  categoria: any;
  usuario: any;
  
  constructor(private router: Router) { 
   const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      lista?: any;
      programacion?: any;
      categoria?: any;
      usuario?: any;
    };

    // Asigna los datos recibidos del estado del router
    this.listaNumero = state?.lista;
    this.programacion = state?.programacion;
    this.categoria = state?.categoria;
    this.usuario = state?.usuario;
  }

  ngOnInit() {
  }

}
