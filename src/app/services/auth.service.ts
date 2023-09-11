import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afauth: AngularFireAuth, private router: Router) {}

  async login(email: string, password: string) {
    try {
      return await this.afauth.signInWithEmailAndPassword(email, password);
    } catch (error: any) {
      switch (error.code) {
        case 'auth/invalid-email':
          console.log('Credenciales inválidas');
          break;
        case 'auth/user-not-found':
          console.log('Credenciales inválidas');
          break;
        case 'auth/wrong-password':
          console.log('Credenciales inválidas');
          break;
        case 'auth/internal-error':
          console.log('Credenciales inválidas');
          break;
        case 'auth/too-many-requests':
          console.log('Credenciales inválidas');
          break;
        default:
          console.log(error.message);
          break;
      }
      return null;
    }
  }
  async registro(email: string, password: string) {
    try {
      return await this.afauth.createUserWithEmailAndPassword(email, password);
    } catch (error: any) {
      switch (error.code) {
        case 'auth/invalid-email':
          console.log('Credenciales inválidas');
          break;
        case 'auth/user-not-found':
          console.log('Credenciales inválidas');
          break;
        case 'auth/wrong-password':
          console.log('Credenciales inválidas');
          break;
        case 'auth/internal-error':
          console.log('Credenciales inválidas');
          break;
        case 'auth/too-many-requests':
          console.log('Credenciales inválidas');
          break;
        default:
          console.log(error.message);
          break;
      }
      return null;
    }
  }
  getUsuarioLogueado() {
    return this.afauth.authState;
  }

  cerrarSesion() {
    this.afauth.signOut();
    console.log('usuario', this.afauth.currentUser);
    this.router.navigateByUrl('login');
  }
}
