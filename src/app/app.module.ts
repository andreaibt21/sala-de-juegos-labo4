import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ErrorComponent } from './componentes/error/error.component';
import { FormsModule } from '@angular/forms';
import { Error404Component } from './componentes/error404/error404.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire/compat';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AhorcadoComponent } from './componentes/ahorcado/ahorcado.component';
import { MayoromenorComponent } from './componentes/mayoromenor/mayoromenor.component';
import { PreguntadosComponent } from './componentes/preguntados/preguntados.component';
import { MijuegoComponent } from './componentes/mijuego/mijuego.component';

const firebaseConfig = {
  apiKey: "AIzaSyDmXWxD8ANkEhm2_G70BArVqDwCopHymW8",
  authDomain: "tplabo4.firebaseapp.com",
  projectId: "tplabo4",
  storageBucket: "tplabo4.appspot.com",
  messagingSenderId: "808478447663",
  appId: "1:808478447663:web:6707f85ccb399e41368eda"
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    QuienSoyComponent,
    RegistroComponent,
    ErrorComponent,
    Error404Component,
    NavbarComponent,
    AhorcadoComponent,
    MayoromenorComponent,
    PreguntadosComponent,
    MijuegoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
  
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
