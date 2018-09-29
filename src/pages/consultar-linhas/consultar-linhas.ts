import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-consultar-linhas',
  templateUrl: 'consultar-linhas.html',
})
export class ConsultarLinhasPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultarLinhasPage');
  }

  showMenu() {
    this.menuCtrl.open();
  }

}
