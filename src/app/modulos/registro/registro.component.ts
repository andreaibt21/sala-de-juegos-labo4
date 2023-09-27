import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent {
  public usuario = {
    nombre: "",
    email: '',
    password: '',
  };
  public error: boolean = false;
  public mensaje: string = '';

  constructor(private AuthService: AuthService, private router: Router) {}


  Registrar() {
    console.log(this.usuario);
    const { nombre, email, password } = this.usuario;
    this.AuthService.registro(nombre, email, password).then((res) => {
      if (res !== '') {
        this.error = true;
        this.mensaje = res;
        console.log('errooooor');
        console.log(res);
      } else {
        this.error = false;
        console.log('se registró', res);
        this.router.navigateByUrl('home/secciones');
      }
    });
  }
}
