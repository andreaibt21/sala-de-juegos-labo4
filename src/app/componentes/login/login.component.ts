import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public usuario = {
    email: '',
    password: '',
  };
  public error: boolean = false;
  public mensaje: string = '';

  constructor(private AuthService: AuthService, private router: Router) {}
  Ingresar() {
    console.log(this.usuario);
    const { email, password } = this.usuario;
    this.AuthService.login(email, password).then((res) => {
      if (res !== '') {
        this.error = true;
        this.mensaje = res;
        console.log('errooooor');
        console.log(res);
      } else {
        this.error = false;
        this.router.navigateByUrl('home');
        console.log('se logueó', res);
      }
    });
  }

  AccesoDirecto() {
    console.log(this.usuario);
    this.usuario.email = 'test@gmail.com';
    this.usuario.password = '123456';
  }
}
