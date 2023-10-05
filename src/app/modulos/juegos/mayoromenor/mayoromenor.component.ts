import { Component, OnInit } from '@angular/core';
import { CartasService } from 'src/app/services/cartas.service';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import {
  trigger,
  animate,
  style,
  state,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-mayoromenor',
  templateUrl: './mayoromenor.component.html',
  styleUrls: ['./mayoromenor.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [
        style({
          backgroundColor: 'blue',
          opacity: 0,
        }),
        animate(2000, style({ backgroundColor: 'red', opacity: 1 })),
      ]),
    ]),
  ],
})
export class MayoromenorComponent {
  valorCartaNueva = -1;
  imagenCartaNueva: any;
  valorCartaVieja = -1;
  imagenCartaVieja: any;
  puntos = 0;
  mensaje = '';
  perdio:boolean = false;
  logueado = this.auth.getUsuarioLogueado();
  usuario: any;
  htmlToAdd :any;

  constructor(
    private cartas: CartasService,
    private auth: AuthService,
    private st: StorageService
  ) {}

  ngOnInit() {
    console.log(this.getCarta());
    this.logueado.subscribe((res) => {
      this.usuario = res?.email;
    });
  }

  getCarta() {
    return new Promise((resolve, reject) => {
      this.cartas.getCarta().subscribe((data: any) => {
        console.log('getCarta: ' + data.cards[0].value);
        this.guardarCarta(data.cards[0]);
        resolve(data);
      });
    });
  }

  guardarCarta(carta: any) {
    // aquí viene data.cards[0].
    this.darValorACarta(carta.value);
    this.imagenCartaNueva = carta.image;
  }

  darValorACarta(textoCarta: any) {
    switch (
      textoCarta //aquí viene el data.cards[0].value
    ) {
      case 'JACK':
        this.valorCartaNueva = 11;
        break;
      case 'QUEEN':
        this.valorCartaNueva = 12;
        break;
      case 'KING':
        this.valorCartaNueva = 13;
        break;
      default:
        this.valorCartaNueva = parseInt(textoCarta);
    }
  }

  esMayorOMenor(valorCartaNueva: number, valorCartaVieja: number) {
    let retorno = '';
    valorCartaNueva > valorCartaVieja
      ? (retorno = 'mayor')
      : (retorno = 'menor');
    return retorno;
  }

  elegirOpcion(opcion: String) {
    this.valorCartaVieja = this.valorCartaNueva;
    this.imagenCartaVieja = this.imagenCartaNueva;
    this.getCarta().then(() => {
      let mayorOMenor = this.esMayorOMenor(
        this.valorCartaNueva,
        this.valorCartaVieja
      );
      mayorOMenor == opcion ? this.gana() : this.pierde();
      console.log(mayorOMenor == opcion);
    });
  }

  gana() {
    this.puntos++;
    this.perdio= false;
    this.mensaje = '¡Acertaste! Sumás un punto más.';

  }

  pierde() {
    this.perdio= true;
    this.mensaje =
      'Perdiste la partida. Tus puntos fueron: ' + this.puntos + '.';
    this.st.addPuntos(this.puntos, 'Mayor o Menor', this.usuario);
    this.imagenCartaVieja = '';
    this.puntos = 0;
  }

  mostrarCartaVieja() {
    return this.imagenCartaVieja
      ? this.imagenCartaVieja
      : '../assets/carta.png';
  }
}
