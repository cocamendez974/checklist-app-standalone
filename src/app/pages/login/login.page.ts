import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from '@ionic/angular/standalone';
import { LoginService } from '../../services/login.service';
import { SessionService } from 'src/app/services/session.service';
import { Router } from '@angular/router';
import { getToken } from '../../utils'; // Adjust the path if needed
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
  ],
})
export class LoginPage implements OnInit {
  constructor(
    private loginService: LoginService,
    private sessionService: SessionService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.sessionService.isLoggedIn()) {
      this.router.navigate(['/listas']);
    }
  }

  email = environment.sacEmail;
  user = '';
  password = '';
  token = getToken();
  hashkey = '';
  // const hashkey = 'vqKRpeDWlebbnQ==';

  login() {
    const user = this.user;
    const password = this.password;
    const token = this.token; // Use actual token logic if needed
    const hashkey = this.hashkey; // Use actual hashkey logic if needed

    if (!user || !password) {
      alert('Por favor ingrese usuario y contraseña.');
      return;
    }

    this.loginService.login(user, password, token, hashkey).subscribe({
      next: (response) => {
        if (response.status) {
          this.sessionService.setUserData(response.data);
          // console.log('Sesión abierta con éxito');
          // console.log('User codigo: ' + this.sessionService.getUserData()?.codigo);
          // console.log(JSON.stringify(this.sessionService.getUserData(), null, 2));
          this.router.navigate(['/listas']);
        } else {
          alert('Usuario o contraseña incorrectos.');
        }
      },
      error: (err) => {
        alert('No se pudo iniciar sesión.');
        console.error('Login error:', err);
      },
    });
  }
}
