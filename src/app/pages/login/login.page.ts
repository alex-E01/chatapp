import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();
import { onAuthStateChanged } from "firebase/auth";
const auth = getAuth();

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: any;
  password: any;
  getuserdata: any = [];
  loginuser: any = [];

  constructor(public router: Router, 
    public alertController: AlertController,
     public toastController:ToastController) { }

  ngOnInit() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }
  
  async login(position:'bottom') {
    const auth = getAuth();
signInWithEmailAndPassword(auth, this.email, this.password)
  .then(async (userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    const toast = await this.toastController.create({
      message: 'Login Successfully!',
      duration: 1500,
      position: position,
    });
   
    await toast.present();
    this.router.navigate(['/home']);
    // ...
  })
  .catch(async (error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage,errorCode,error);
    const toast = await this.toastController.create({
      message: 'Invalid Username or Password!',
      duration: 1500,
      position: position,
    });
    
    await toast.present();
  });
    
  }


}
