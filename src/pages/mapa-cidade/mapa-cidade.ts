import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-mapa-cidade',
  templateUrl: 'mapa-cidade.html',
})
export class MapaCidadePage {
  // MapSize: any = {height: 100, width: 100};

  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private geolocation: Geolocation
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
}
