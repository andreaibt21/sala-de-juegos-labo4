import { Component, OnInit, ViewChild } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  public mensaje = '';

  constructor(
    public chatService: ChatService,
    private router: Router,
    private AuthService: AuthService
  ) {}

  @ViewChild('chatContainer') chatContainer?: any;

  scrollchat() {
    try {
      this.chatContainer.nativeElement =
        this.chatContainer.nativeElement.scrollHeight;
    } catch (error) {}
  }

  ngOnInit(): void {
    this.chatService.loadMessages();
    this.scrollchat();

    this.AuthService.getUsuarioLogueado();
    this.AuthService.getUsuarioLogueado().subscribe((res) => {
      if( res?.email == undefined){

        console.log("no esta logueado")
        this.router.navigateByUrl('login');

      }else{
        console.log(res?.email);
        console.log("first")
      }

    });
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
      this.scrollchat();
    }
  }
}
