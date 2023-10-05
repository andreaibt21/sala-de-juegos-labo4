import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { ErrorComponent } from './componentes/error/error.component';
import { Error404Component } from './componentes/error404/error404.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';



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
    ErrorComponent,
    Error404Component,
    NavbarComponent,


  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
