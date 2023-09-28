import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  public message: string = '';

  constructor(public chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService.loadMessages();
  }

  sendMessage() {
    console.log('DDD enviado');
   // if (this.message.length > 0) {
      this.chatService
        .addMessage("holi")
        ?.then(() => {
          console.log('mensaje enviado');
        })
        .catch(() => {
          console.log('Error al enviar');
        })
        .finally(() => {
          this.message = '';
        });
   // }
  }
}
