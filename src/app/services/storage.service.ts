import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { serverTimestamp } from 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  usuario: any;
  coleccion: string = 'usuarios';

  constructor(private db: AngularFirestore, private router: Router) {}

  public async addUsuario(nombre: string, mail: string) {
    this.usuario = {
      nombre: nombre,
      mail: mail,
      creado: serverTimestamp(),
      log: serverTimestamp(),
      activo: true,
    };
    this.db
      .collection(this.coleccion)
      .add(this.usuario)
      .then((user) => {
        console.log('¡Usuario grabado con éxito!');
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
