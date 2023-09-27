import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuegosRoutingModule } from './juegos-routing.module';
import { JuegosComponent } from './juegos.component';

import { MijuegoComponent } from './mijuego/mijuego.component';
import { MayoromenorComponent } from './mayoromenor/mayoromenor.component';
import { PreguntadosComponent } from './preguntados/preguntados.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';

@NgModule({
  imports: [CommonModule, JuegosRoutingModule],
  declarations: [
    JuegosComponent,
    MijuegoComponent,
    MayoromenorComponent,
    PreguntadosComponent,
    AhorcadoComponent,
  ],
  exports: [JuegosComponent],
})
export class JuegosModule {}