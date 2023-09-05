import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-newchat',
  templateUrl: './newchat.page.html',
  styleUrls: ['./newchat.page.scss'],
})
export class NewchatPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  getchat(item:any){
  this.router.navigate(["chat"]);

  }
}
