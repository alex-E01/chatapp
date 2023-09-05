import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  fullname: any;
  email: any;
  password: any;
  signupdata: any = [];
  

  constructor(public router: Router, 
    public alertController: AlertController,
     public toastController:ToastController) { }

  ngOnInit() {
  }

  async signup() {

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.email, this.password)
      .then(async (userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        
        
      const alert = await this.alertController.create({
        header: 'Alert',
        subHeader: 'Congratualations',
        message: 'You havs Successfully Sign Up!',
        buttons: ['OK'],
      });
      await alert.present();
      this.router.navigate(['/']);

      })
      .catch(async (error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        const alert = await this.alertController.create({
          header: 'Alert',
          subHeader: 'Cannot Connect',
          message: 'Failed',
          buttons: ['OK'],
        });
        await alert.present();
      });
      console.log('My auth',auth);

   
      
    }

   

}

