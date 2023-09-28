import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.scss'],
})
export class JuegosComponent {

  muestraBotones: boolean = true;

  constructor(private _location: Location) {

    this.muestraBotones = true;
  }

  handleClick = () => {
    if (this._location.path(true) !== '/juegos/') {

      this.muestraBotones = false;
    }
    console.log(this._location.path(true));
    // this._location.path;
  };


}
