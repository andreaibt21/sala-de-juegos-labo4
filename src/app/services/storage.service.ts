import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { formatDate } from '@angular/common';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
@Injectable({
  providedIn: 'root',
})
export class StorageService {
  usuario: any;
  coleccion: string = 'usuarios';
  today = new Date();
  jstoday = '';

  constructor(private db: AngularFirestore, private router: Router) {
    this.jstoday = formatDate(this.today, 'dd-MMM-yyyy hh:mm:ss a', 'en-US');
  }

  public async addUsuario(mail: string) {
    this.usuario = {
      mail: mail,
      creado: this.jstoday,
    };
    console.log(this.usuario);
    this.db
      .collection(this.coleccion)
      .add(this.usuario)
      .then((user) => {
        console.log('¡Usuario grabado con éxito!', user);
      })
      .catch((error) => {
        console.log('errorr', error);
      });
  }

  public async addlog(mail: string) {
    this.usuario = {
      mail: mail,
      log: this.jstoday,
    };
    console.log(this.usuario);
    this.db
      .collection("logs")
      .add(this.usuario)
      .then((user) => {
        console.log('¡logeo guardado', user);
      })
      .catch((error) => {
        console.log('errorr', error);
      });
  }

  grabarTiempoSesionIniciada(mail: string) {
    firebase
      .firestore()
      .collection(this.coleccion)
      .where('mail', '==', mail)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.ref.update({
            log: this.jstoday,
          });
        });
      })
      .catch((error) => {
        console.log('Error grabando: ', error);
      });
  }

  actualizarDato(mail: string, campo: any, nuevoDato: any) {
    firebase
      .firestore()
      .collection('usuarios')
      .where('mail', '==', mail)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.ref.update({
          //   campo: nuevoDato,
          // });
          console.log(doc);
        });
      })
      .catch((error) => {
        console.log('Error grabando: ', error);
      });
  }
}
