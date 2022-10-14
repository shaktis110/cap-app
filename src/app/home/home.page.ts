import { Component } from '@angular/core';
import { FirebaseX } from '@awesome-cordova-plugins/firebase-x/ngx';
import { AlertController,Platform } from '@ionic/angular';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
declare var NavigationBar :any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
token;
  constructor(private firebasex: FirebaseX,private alert: AlertController,private platform: Platform,private statusBar: StatusBar) {
this.platform.ready().then(() =>{
  
    //For bottom statusbar
  // second argument of function role lightNavigationBar Change the color of the buttons in
  // the navigation bar to black, use in light colors of the navigation bar (Android 8.0 or higher).
  NavigationBar.backgroundColorByHexString('#00FFFF',false);
 // for top status bar
 this.statusBar.backgroundColorByHexString('#00FF00');
  
  
  this.firebasex.getToken()
  .then(token => {console.log(`The token is ${token}`);
  this.token = token;
}).catch(error => console.error('Error getting token', error));
});

}

}
