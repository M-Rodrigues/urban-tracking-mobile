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
    
    let alert = this.alertCtrl.create({
      title: 'Localização GPS',
      message: 'Deseja saber a localização do seu dispositivo?',
      buttons: [{
        text: 'Sim',
        handler: () => {
          // let navTransition = alert.dismiss();
          
          let loading = this.loadingCtrl.create({
            content: 'Buscando...'
          });
          loading.present();

          this.geolocation.getCurrentPosition()
            .then((res) => {
              loading.dismiss();
              alert.dismiss();
              this.alertCtrl.create({
                title: 'Você está em:',
                message: 'Latitude: '+res.coords.latitude+'\nLongitude: '+res.coords.longitude,
                buttons: ['Ok']
              }).present();
              console.log(res);              
            })
            .catch((e) => {
              loading.dismiss();
              alert.dismiss();
              this.alertCtrl.create({
                title: 'Erro no Geolocation',
                message: e.message,
                buttons: ['Ok']
              }).present();
            });
        }
      },
      {
        text: 'Não',
        role: 'cancel',
        handler:() => {
          console.log('Fechando Alert...');
        }
      }]
    });

    alert.present()
  }
}
