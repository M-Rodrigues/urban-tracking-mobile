import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-mapa-cidade',
  templateUrl: 'mapa-cidade.html',
})
export class MapaCidadePage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaCidadePage');
  }

}
