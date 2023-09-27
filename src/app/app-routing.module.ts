import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { LoginComponent } from './modulos/login/login.component';
//import { HomeComponent } from './componentes/home/home.component';
//import { RegistroComponent } from './modulos/registro/registro.component';
import { ErrorComponent } from './componentes/error/error.component';
import { Error404Component } from './componentes/error404/error404.component';
import { AhorcadoComponent } from './componentes/ahorcado/ahorcado.component';
import { MayoromenorComponent } from './modulos/juegos/mayoromenor/mayoromenor.component';
import { PreguntadosComponent } from './modulos/juegos/preguntados/preguntados.component';
import { MijuegoComponent } from './modulos/juegos/mijuego/mijuego.component';
import { QuienSoyComponent } from './modulos/home/quien-soy/quien-soy.component';
import { HomeModule } from './modulos/home/home.module';
import { JuegosComponent } from './modulos/juegos/juegos.component';

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
      import('./modulos/login/login.module').then((mod) => mod.LoginModule),
  },
  {
    path: 'registro',
    loadChildren: () =>
      import('./modulos/registro/registro.module').then((mod) => mod.RegistroModule ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modulos/home/home.module').then((mod) => mod.HomeModule),
  },
  {
    path: 'juegos',
    loadChildren: () =>
      import('./modulos/juegos/juegos.module').then((mod) => mod.JuegosModule),
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
