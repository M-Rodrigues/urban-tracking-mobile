import { Component } from '@angular/core';
import { NavController, AlertController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-mapa-cidade',
  templateUrl: 'mapa-cidade.html',
})
export class MapaCidadePage {
  // Size: any = {height: 100, width: 100};

  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private menuCtrl: MenuController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaCidadePage');
  }

  onLocate() {
    console.log('MapaCidadePage::onLocate()');
    
    this.alertCtrl.create({
      title: 'Localização GPS',
      message: 'Em breve, feature de georreferenciamento',
      buttons: ['Ok']
    }).present();
    
  }

  onShowMenu() {
    this.menuCtrl.open();
  }
}
