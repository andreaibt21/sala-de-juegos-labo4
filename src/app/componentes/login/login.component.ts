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
  constructor(private AuthService: AuthService, private router: Router) {}
  Ingresar() {
    console.log(this.usuario);
    const { email, password } = this.usuario;
    this.AuthService.login(email, password).then((res) => {
      this.router.navigateByUrl('home');
      console.log('se logueó', res);
    });
  }

  Registrar() {
    console.log(this.usuario);
    const { email, password } = this.usuario;
    this.AuthService.registro(email, password).then((res) => {
      console.log('se registró', res);
    });
  }
}
