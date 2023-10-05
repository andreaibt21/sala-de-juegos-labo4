import { Component, OnInit } from '@angular/core';
import { PalabrasService } from '../../../services/palabras.service';

import { StorageService } from '../../../services/storage.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.scss'],
})
export class AhorcadoComponent implements OnInit {
  constructor(
    private servicio: PalabrasService,
    private auth: AuthService,
    private st: StorageService
  ) {}
  mensaje = '';
  gana = '';
  dato: any;
  palabra = '';
  palabraAux = '';
  letra = '';
  letrasUsada: any[] = [];
  arrayPalabra: any;
  arrayPalabraAux: any;
  intentos = 0;
  intentosRestantes = 6;
  usuario: any;
  logueado = this.auth.getUsuarioLogueado();
  srcAhorcado = '../assets/ahorcado/Paso_' + this.intentos + '.png';
  puntos = -1;


  ngOnInit() {
    this.nuevaPalabra();
    this.logueado.subscribe((res) => {
      this.usuario = res?.email;
    });
  }

  reset() {
    this.palabra = '';
    this.gana = '';
    this.palabraAux = '';
    this.mensaje = '';
    this.letra = '';
    this.letrasUsada = [];
    this.intentos = 0;
    this.intentosRestantes = 6;
    this.setImage(this.intentos);
    this.nuevaPalabra();
    this.puntos = -1;
  }

  nuevaPalabra() {
    this.servicio.getPalabra().subscribe((data) => {
      this.dato = data;
      this.palabra = data
        .toString()
        .toLowerCase()
        .normalize('NFD')
        .replace(/\p{Diacritic}/gu, '');
      this.palabraAux = '_ '.repeat(this.palabra.length);
      this.arrayPalabra = this.palabra.split('');
      this.arrayPalabraAux = this.palabraAux.split('');
      console.log(data);
    });
  }

  setImage(intento: any) {
    this.srcAhorcado = '../assets/ahorcado/Paso_' + intento + '.png';
  }

  setLetra(letra: string) {
    if (!this.ganoOPerdio() && !this.letraRepetida(letra)) {
      if (!this.arrayPalabra.includes(this.letra)) {
        this.intentos += 1;
        this.intentosRestantes -= 1;
        this.setImage(this.intentos);
        if (this.perdio()) {
          this.mensaje= 'Te quedaste sin intentos. La palabra era: ' + this.palabra + '.'
          ;
        }
      } else {
        this.setPalabraAux();
        if (this.gano()) {
          this.gana ='¡Ganaste! Juega de nuevo';
        }
      }
    }
  }
  setPalabraAux() {
    const arrayPalabraAux2 = this.palabraAux.split(' ');
    for (let i = 0; i < this.arrayPalabra.length; i++) {
      if (this.arrayPalabra[i] == this.letra) {
        arrayPalabraAux2[i] = this.letra;
      }
    }
    this.palabraAux = arrayPalabraAux2.join(' ');
  }

  ganoOPerdio() {
    let retorno = false;

    if (this.perdio()) {
      // this.mensaje ="Te quedaste sin intentos. Prueba de nuevo.";
      this.mensaje ='Te quedaste sin intentos. Juega de nuevo.';
      retorno = true;
    }
    if (this.gano()) {
      //this.alerta.lanzarAlertaExito("¡Ya ganaste! Juega de nuevo");
      this.gana ='¡Ya ganaste! Juega de nuevo';


      retorno = true;
    }
    return retorno;
  }

  letraRepetida(letra: any) {
    var retorno = true;
    if (this.letrasUsada.includes(letra)) {
      this.mensaje ='Esta letra ya ha sido usada';
      retorno = true;
    } else {
      this.letra = letra;
      this.letrasUsada.push(this.letra);
      retorno = false;
      this.mensaje ='';
    }

    return retorno;
  }
  perdio() {
    let retorno: boolean;
    if (this.intentosRestantes == 0) {
      retorno = true;
      this.st.addPuntos(this.intentosRestantes + 1, 'Ahorcado', this.usuario);
    } else {
      retorno = false;
    }
    return retorno;
  }

  gano() {
    const arrayPalabraAux = this.palabraAux.split('');
    let retorno: boolean;
    if (arrayPalabraAux.includes('_')) {
      retorno = false;
      this.st.addPuntos(this.intentosRestantes + 1, 'Ahorcado', this.usuario);
    } else {
      retorno = true;
    }
    return retorno;
  }
}
