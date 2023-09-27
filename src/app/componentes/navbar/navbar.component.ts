import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  usuarioLogueado = this.AuthService.getUsuarioLogueado();
  constructor(private AuthService: AuthService) {}

 ngOnInit(): void {}

  handleClick = () => {
    this.AuthService.cerrarSesion();
  };

  handleVerificarUsuario = () => {
    this.AuthService.getUsuarioLogueado().subscribe((res) => {
      console.log(res?.email);
    });
  };
}
