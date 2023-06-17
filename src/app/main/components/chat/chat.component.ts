import { Component } from '@angular/core';
import { IMessage } from 'src/app/models/message';

@Component({
  selector: 'app-delete-question',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  inputMessage = '';
  messages: IMessage[] = [];

  sendMessage() {
    if(!this.inputMessage || !this.inputMessage.trim()){
      return;
    }

    const userMessage: IMessage = {
      id: this.messages.length + 1,
      senderId: 1,
      receiverId: 2,
      message: this.inputMessage.trim(),
      timestamp: new Date().toISOString() 
    }

    this.messages.push(userMessage);
    this.inputMessage = '';
  }

}