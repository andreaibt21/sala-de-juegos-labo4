import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { JuegosComponent } from './juegos.component';


const routes: Routes = [
  {
    path: '',
    component: JuegosComponent,
    children: [
      {
        path: 'preguntados',
        loadChildren: () =>
          import(`./preguntados/preguntados.module`).then(
            (m) => m.PreguntadosModule
          ),
      },
      {
        path: 'mijuego',
        loadChildren: () =>
          import(`./mijuego/mijuego.module`).then((m) => m.MijuegoModule),
      },
      {
        path: 'mayoromenor',
        loadChildren: () =>
          import(`./mayoromenor/mayoromenor.module`).then((m) => m.MayoromenorModule),
      },{
        path: 'ahorcado',
        loadChildren: () =>
          import(`./ahorcado/ahorcado.module`).then((m) => m.AhorcadoModule),
      },{
        path: '',
        loadChildren: () =>
          import(`./seccion-juegos/seccion-juegos.module`).then((m) => m.SeccionJuegosModule),
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuegosRoutingModule {}
