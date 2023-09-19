import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ErrorComponent } from './componentes/error/error.component';
import { Error404Component } from './componentes/error404/error404.component';
import { AhorcadoComponent } from './componentes/ahorcado/ahorcado.component';
import { MayoromenorComponent } from './componentes/mayoromenor/mayoromenor.component';
import { PreguntadosComponent } from './componentes/preguntados/preguntados.component';
import { MijuegoComponent } from './componentes/mijuego/mijuego.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    //  component: LoginComponent,
    loadChildren: () =>
      import('./componentes/login/login.module').then((mod) => mod.LoginModule),
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'ahorcado',
    component: AhorcadoComponent,
  },
  {
    path: 'mayoromenor',
    component: MayoromenorComponent,
  },
  {
    path: 'preguntados',
    component: PreguntadosComponent,
  },
  {
    path: 'mijuego',
    component: MijuegoComponent,
  },
  {
    path: 'quiensoy',
    component: QuienSoyComponent,
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
