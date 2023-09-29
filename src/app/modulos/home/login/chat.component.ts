import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  public mensaje = '';

  constructor(public chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService.loadMessages();
  }

  sendMessage() {
    if (this.mensaje.length > 0) {
      this.chatService
        .addMessage(this.mensaje)
        ?.then(() => {
          console.log('Message sent');
        })
        .catch(() => {
          console.log('Error sending message');
        })
        .finally(() => {
          this.mensaje = '';
        });
    }
  }
}
