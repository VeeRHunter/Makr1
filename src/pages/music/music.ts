import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { MusicPop } from "./music-pop/music-pop";

@Component({
  selector: 'page-music',
  templateUrl: 'music.html'
})
export class MusicPage {

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

  }

onShowOptions(event: MouseEvent) {
  const popover = this.popoverCtrl.create(MusicPop);
  popover.present({ev: event});
}

}
