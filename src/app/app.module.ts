import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
//import { LoginComponent } from './modulos/login/login.component';
//import { HomeComponent } from './componentes/home/home.component';
//import { QuienSoyComponent } from './modulos/home/quien-soy/quien-soy.component';
//import { RegistroComponent } from './modulos/registro/registro.component';
import { ErrorComponent } from './componentes/error/error.component';
import { Error404Component } from './componentes/error404/error404.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AhorcadoComponent } from './componentes/ahorcado/ahorcado.component';
// import { MayoromenorComponent } from './modulos/juegos/mayoromenor/mayoromenor.component';
// import { PreguntadosComponent } from './modulos/juegos/preguntados/preguntados.component';
// import { MijuegoComponent } from './modulos/juegos/mijuego/mijuego.component';
//import { JuegosComponent } from './modulos/juegos/juegos.component';

const firebaseConfig = {
  apiKey: 'AIzaSyDmXWxD8ANkEhm2_G70BArVqDwCopHymW8',
  authDomain: 'tplabo4.firebaseapp.com',
  projectId: 'tplabo4',
  storageBucket: 'tplabo4.appspot.com',
  messagingSenderId: '808478447663',
  appId: '1:808478447663:web:6707f85ccb399e41368eda',
};

@NgModule({
  declarations: [
    AppComponent,
    //  LoginComponent,
    //   HomeComponent,
    // QuienSoyComponent,
    // RegistroComponent,
    ErrorComponent,
    Error404Component,
    NavbarComponent,
    AhorcadoComponent,
    // MayoromenorComponent,
    // PreguntadosComponent,
    // MijuegoComponent,
   //JuegosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,

    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
