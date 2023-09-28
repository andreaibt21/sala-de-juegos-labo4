import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private afauth: AngularFireAuth,
    private storage: StorageService,
    private router: Router
  ) {}

  async login(email: string, password: string): Promise<string> {
    let mensaje: string = '';

    try {
      await this.afauth.signInWithEmailAndPassword(email, password);
      this.storage.addlog(email);
      this.storage.grabarTiempoSesionIniciada2(email);
      return mensaje;
    } catch (error: any) {
      switch (error.code) {
        case 'auth/invalid-email':
          mensaje = 'Correo inválido';
          console.log('Correo inválido');
          break;
        case 'auth/user-not-found':
          mensaje = 'Usuario no encontrado';
          console.log('Usuario no encontrado');
          break;
        case 'auth/wrong-password':
        case 'auth/missing-password':
          mensaje = 'Contraseña inválida';
          console.log('Contraseña inválida');
          break;
        case 'auth/internal-error':
          mensaje = 'Error interno';
          console.log('Error interno');
          break;
        case 'auth/too-many-requests':
          mensaje = 'Muchas llamadas en poco tiempo';
          console.log('Muchas llamadas en poco tiempo');
          break;
        default:
          mensaje = 'error.message';
          console.log(error);
          break;
      }
      return mensaje;
    }
  }
  async registro(
    nombre: string,
    email: string,
    password: string
  ): Promise<string> {
    let mensaje: string = '';
    try {
      await this.afauth.createUserWithEmailAndPassword(email, password);
      this.storage.addUsuario(email);
      return mensaje;
    } catch (error: any) {
      switch (error.code) {
        case 'auth/invalid-email':
          mensaje = 'Correo inválido';
          console.log('Correo inválido');
          break;
        case 'auth/email-already-in-use':
          mensaje = 'Este correo ya está registrado';
          console.log('Este correo ya está registrado');
          break;
        case 'auth/email-already-exists':
          mensaje = 'Este correo ya está registrado';
          console.log('Este correo ya está registrado');
          break;
        case 'auth/invalid-password':
          mensaje = 'Contraseña inválida';
          console.log('Contraseña inválida');
          break;
        case 'auth/weak-password':
          mensaje =
            'Error, ingrese una contraseña que tenga mas de 5 carácteres';
          console.log(
            'Error, ingrese una contraseña que tenga mas de 5 carácteres'
          );
          break;
        case 'auth/internal-error':
          mensaje = 'Error interno';
          console.log('Error interno');
          break;
        case 'auth/too-many-requests':
          mensaje = 'Muchas llamadas en poco tiempo';
          console.log('Muchas llamadas en poco tiempo');
          break;
        default:
          mensaje = error.message;
          console.log(error.message);
          break;
      }
      return mensaje;
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
