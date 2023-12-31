import { Component, OnInit } from '@angular/core';
import { PreguntadosService } from 'src/app/services/preguntados.service';
import { AlertService } from 'src/app/services/alert.service';
import { StorageService } from 'src/app/services/storage.service';
import { AuthService } from 'src/app/services/auth.service';
import { HacerAnonSiNullPipe } from 'src/app/pipes/hacerAnonSiNull.pipe';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.scss'],
})
export class PreguntadosComponent implements OnInit {
  repetida: any[] = [];
  data: any;
  dataAux: any;

  //opción correcta
  preguntaActual: any;
  contestacionActual: any;
  src = '';

  //opciones
  i: any; //los índices de las opciones
  opciones: any[] = [];
  opcionesOrd: any;

  puntos = 0;
  numPreguntas = 0;
  opcionElegida = '';
  peguntasHechas = 0;
  usuario: any;
  logueado = this.auth.getUsuarioLogueado();
  jugar = true;
  mostrar: boolean = true;
  constructor(
    private servicio: PreguntadosService,
    private alerta: AlertService,
    private auth: AuthService,
    private st: StorageService,
    private anon: HacerAnonSiNullPipe
  ) {}
  interval: any;
  startTimer() {
    this.mostrar = true;
    this.interval = setInterval(() => {
      if (this.mostrar == true) {
        this.mostrar = false;
      }
     // console.log(this.mostrar);
    }, 1000);
  }
  pauseTimeLine() {
    clearInterval(this.interval);
  }


  ngOnInit() {
    this.logueado.subscribe((res) => {
      this.usuario = res?.email;
    });

    this.servicio.getPregunta().subscribe((data) => {
      console.log(data);
      this.dataAux = data;
      this.data = this.dataAux.data;
      this.generar();
      console.log(this.i);
      this.generarSrc();
      this.preguntaActual = this.data[this.i[0]].title;
      this.contestacionActual = this.anon.transform(
        this.data[this.i[0]].artist_title
      );
      console.log("this.preguntaActual", this.preguntaActual);
      console.log('Respuesta correcta: ' + this.contestacionActual);
      console.log("this.opciones",this.opciones);
      this.startTimer();
    });
    this.pauseTimeLine()
  }

  generarSrc() {
    var dato = this.data[this.i[0]];
    var image_id = dato.image_id;
    var iiif_url = this.dataAux.config.iiif_url + '/';
    var sufijo = '/full/843,/0/default.jpg';
    this.src = iiif_url + image_id + sufijo;
    console.log(this.src);
  }

  setOpcionElegida(opcion: any) {
    this.opcionElegida = opcion;
  }

  responder() {
    console.log('this.opcionElegida', this.opcionElegida);
    if (this.opcionElegida == '') {
      console.log('vaciooooo');
      this.alerta.lanzarAlertaError('Seleccione una opción');
    } else {
      if (this.opcionElegida == this.contestacionActual) {
        this.pauseTimeLine();
        this.alerta.lanzarAlertaExito('¡Correcto!');
        this.startTimer();
        this.puntos++;
      } else {
        this.pauseTimeLine();
        this.alerta.lanzarAlertaError(
          'Incorrecto. Respuesta correcta: ' + this.contestacionActual
        );


        this.startTimer();
      }
      this.numPreguntas++;
      this.ngOnInit();
      this.terminarJuego();
    }
  }

  setJugar() {
    this.jugar = true;
  }

  terminarJuego() {
    if (this.numPreguntas > 4) {
      this.alerta.lanzarAlertaComun(
        'Fin del juego. <br> Tu puntaje ha sido de ' + this.puntos
      );

      this.st.addPuntos(this.puntos, 'Preguntados', this.usuario);
      this.puntos = 0;
      this.numPreguntas = 0;
      this.jugar = false;
      this.repetida = [];
      this.pauseTimeLine();
    }
  }

  generar() {
    var aniadidos = 0;
    this.i = [];
    this.opciones = [];

    do {
      const iAux = Math.floor(Math.random() * this.data.length);
      if (
        iAux != 4 && iAux != 21 && // el 4 del array falla ¿?
        !this.i.includes(iAux) &&
        !this.opciones.includes(
          this.anon.transform(this.data[iAux].artist_title)
          ) &&
          this.data[iAux].image_id != null
          ) {
        console.log("iAux", iAux)
        if (aniadidos == 0) {
          if (!this.repetida.includes(this.data[iAux].title)) {
            this.repetida.push(this.data[iAux].title);

            this.i.push(iAux);
            this.opciones.push(
              this.anon.transform(this.data[iAux].artist_title)
            );
            aniadidos++;
          }
        } else {
          this.i.push(iAux);
          this.opciones.push(this.anon.transform(this.data[iAux].artist_title));
          aniadidos++;
        }
      }
    } while (aniadidos < 3);

    this.opcionesOrd = this.opciones.sort();
  }
}
