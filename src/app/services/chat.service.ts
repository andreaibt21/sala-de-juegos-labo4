import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { AuthService } from './auth.service';

import * as moment from 'moment';
interface Message {
  message: string;
  date: string;
  uid: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private itemsCollection?: AngularFirestoreCollection<any>;
  public chats: Message[] = [];
  public chatsOrd: Message[] = [];
  public userLog: any = {};
  elements: any;

  constructor(private authService: AuthService, private afs: AngularFirestore) {
    this.authService.getUsuarioLogueado().subscribe((user) => {
      if (user) {
        this.userLog.uid = user.uid;
        this.userLog.email = user.email;
      }
    });
  }

  loadMessages() {
    this.itemsCollection = this.afs.collection<Message>('chats', (ref) =>
      ref.orderBy('date', 'desc')
    );
    return this.itemsCollection.valueChanges().subscribe((chats) => {
      this.chats = [];
      for (let chat of chats) {
        this.chats.unshift(chat);
      }
      this.chatsOrd = this.chats.sort(
        (b: any, a: any) =>
          +moment(b.date, 'D-M-YYYY HH:mm:ss').format('YYYYMMDDHHmmss') -
          +moment(a.date, 'D-M-YYYY HH:mm:ss').format('YYYYMMDDHHmmss')
      );
      this.elements = document.getElementById('app-message');
      if (this.elements != null) {
        this.elements.scrollTop = this.elements.scrollHeight;
      }

      console.log(this.chats)
    });
  }

  addMessage(message: string) {
    console.log('llegó');
    let newMessage: Message = {
      message: message,
      date: this.formatDate(new Date()),
      uid: this.userLog.uid,
      email: this.userLog.email,
    };

    return this.itemsCollection?.add(newMessage);
  }

  dateComponentPad = (value: string) => {
    var format = value;
    return format.length < 2 ? '0' + format : format;
  };

  formatDate = (date: any) => {
    let datePart = [
      date.getDate(),
      date.getMonth() + 1,
      date.getFullYear(),
    ].map(this.dateComponentPad);
    let timePart = [date.getHours(), date.getMinutes(), date.getSeconds()].map(
      this.dateComponentPad
    );
    return datePart.join('-') + ' ' + timePart.join(':');
  };
}
