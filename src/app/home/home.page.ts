import { Component } from '@angular/core';
import { FirebaseX } from '@awesome-cordova-plugins/firebase-x/ngx';
import { AlertController,Platform } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
token;
  constructor(private firebasex: FirebaseX,private alert: AlertController,private platform: Platform) {
this.platform.ready().then(() =>{
  this.firebasex.getToken()
  .then(token => {console.log(`The token is ${token}`);
  this.token = token;
}).catch(error => console.error('Error getting token', error));
});

}
