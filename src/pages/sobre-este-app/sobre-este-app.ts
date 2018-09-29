import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-sobre-este-app',
  templateUrl: 'sobre-este-app.html',
})
export class SobreEsteAppPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SobreEsteAppPage');
  }

  showMenu() {
    this.menuCtrl.open();
  }

}
