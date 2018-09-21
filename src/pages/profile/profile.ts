import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { Youtube } from '../youtube/youtube'

/**
 * Generated class for the Profile page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class Profile {

  youtube = Youtube;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Profile');
  }

  nextpage() {
    this.navCtrl.push(Youtube);
  }
  
  showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Mmmm, I think I like it!',
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

    showToast2(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Congratulations, you are now following Sarah!',
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

}
