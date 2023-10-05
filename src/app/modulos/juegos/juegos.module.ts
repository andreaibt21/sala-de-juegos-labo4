import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuegosRoutingModule } from './juegos-routing.module';
import { JuegosComponent } from './juegos.component';

import { MijuegoComponent } from './mijuego/mijuego.component';
import { MayoromenorComponent } from './mayoromenor/mayoromenor.component';
import { PreguntadosComponent } from './preguntados/preguntados.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { SeccionJuegosComponent } from './seccion-juegos/seccion-juegos.component';
import { TecladoModule } from "../../componentes/teclado/teclado.module";

@NgModule({
    declarations: [
        JuegosComponent,
        MijuegoComponent,
        MayoromenorComponent,
        PreguntadosComponent,
        AhorcadoComponent,
        SeccionJuegosComponent,
    ],
    exports: [JuegosComponent],
    imports: [CommonModule, JuegosRoutingModule, TecladoModule]
})
export class JuegosModule {}
