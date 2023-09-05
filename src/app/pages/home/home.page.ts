import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signOut , onAuthStateChanged } from "firebase/auth";
import { getDatabase,ref, connectDatabaseEmulator } from "firebase/database";
const db = getDatabase();
const auth = getAuth();
const user = auth.currentUser;
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  segment = 'chats';
  open_new_chat = false;
  rooms:any;

  constructor(public router:Router) {
 
   }

  ngOnInit() {
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;
    
      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      const uid = user.uid;
      console.log('user =============',user)
    }

    
  }
  
  logout(){
    signOut(auth).then(() => {
      // Sign-out successful.
      this.router.navigate(['/']);
    }).catch((error) => {
      // An error happened.
      console.log('error');
    });
   

  }
  onSegmentChanged(event:any){
    // console.log(event);

  }

 newchat(){
  this.router.navigate(["newchat"]);
 }
 getchat(item:any){
  this.router.navigate(["chat"]);

 }

}
