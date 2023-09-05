import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  chat: any;
  current_user_id: any;
  name: any = 'sender';
  message: any;
  chats = [
    { id: 1, sender: 1, message: 'hi' },
    { id: 2, sender: 2, message: 'hi helllo' },
  ]

  constructor() { }

  ngOnInit() {
  }

}
