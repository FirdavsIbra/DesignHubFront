import { Component, OnInit } from '@angular/core';
import { IMessage } from 'src/app/models/message';
import { RequestService } from '../../services/request.service';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  inputMessage = '';
  messages: IMessage[] = [];
  public selectedUserId: number = -1;
  public users: IUser[] = [];
  public userId?: number;
  
  public constructor (private requestService: RequestService) { }

  ngOnInit(): void {
    this.getAllUsers();
    this.getMe();
    this.getMessages();
  }

  public getMessages(): void {
    if(this.userId !== 1 ){
      this.getUserMessages();
    }
    else{
      this.getAdminMessages();
    }
  }

  public getAllUsers(): void {
    this.requestService.getAllUsers().subscribe({
      next: (response: any) => {
        this.users = response;
      }
    })
  }

  public getMe(): void {
    this.requestService.getMe().subscribe({
      next: (response: any) => {
        this.userId = response.id;
      }
    })
  }

  public getUserMessages() {
    this.requestService.getMe().subscribe({
      next: (response: any) => {
        const clientId = response.id;

        this.requestService.getAllMessagesByRecieverAndSenderId(1, clientId).subscribe({
          next: (clientMessages: any) => {
            // Get messages sent by the admin
            this.requestService.getAllMessagesByRecieverAndSenderId(clientId, 1).subscribe({
              next: (adminMessages: any) => {
                // Combine client and admin messages into a single array
                this.messages = [...clientMessages, ...adminMessages];
              }
            });
          }
        });
      }
    })
  }

  public getAdminMessages() {
    this.requestService.getAllMessagesByRecieverAndSenderId(1, this.selectedUserId).subscribe({
      next: (clientMessages: any) => {
        // Get messages sent by the admin
        this.requestService.getAllMessagesByRecieverAndSenderId(this.selectedUserId, 1).subscribe({
          next: (adminMessages: any) => {
            // Combine client and admin messages into a single array
            this.messages = [...clientMessages, ...adminMessages];
            this.sortMessagesByTimestamp();
          }
        });
      }
    });
  }

  public sendMessage(): void {
    if(!this.inputMessage || !this.inputMessage.trim()){
      return;
    }
    
    if(this.userId !== 1) {
      const userMessage: IMessage = {
        recieverId: 1,
        message: this.inputMessage.trim(),
        timestamp: new Date().toString()
      }
      this.requestService.addMessage(userMessage.message, userMessage.recieverId, userMessage.timestamp).subscribe({
        next: () => {
          this.messages.push(userMessage);
          this.inputMessage = '';
        },
        error: (error) => {
          console.log('Error while sending message:', error);
        }
      });
    }
    else {
      const userMessage: IMessage = {
        recieverId: this.selectedUserId,
        message: this.inputMessage.trim(),
        timestamp: new Date().toString()
      }
      this.requestService.addMessage(userMessage.message, userMessage.recieverId, userMessage.timestamp).subscribe({
        next: () => {
          this.messages.push(userMessage);
          this.inputMessage = '';
        },
        error: (error) => {
          console.log('Error while sending message:', error);
        }
      });
    }
    this.inputMessage = '';
  }

  public onUserClick(id: number) {
    this.selectedUserId = id;
    this.requestService.getAllMessagesByRecieverAndSenderId(1, this.selectedUserId).subscribe({
      next: (clientMessages: any) => {
        // Get messages sent by the admin
        this.requestService.getAllMessagesByRecieverAndSenderId(this.selectedUserId, 1).subscribe({
          next: (adminMessages: any) => {
            // Combine client and admin messages into a single array
            this.messages = [...clientMessages, ...adminMessages];
          }
        });
      }
    });
  }

  private sortMessagesByTimestamp() {
    this.messages.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
  }
}