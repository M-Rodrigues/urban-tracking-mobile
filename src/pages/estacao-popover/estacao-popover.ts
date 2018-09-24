import { Estacao } from './../../models/estacao';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-estacao-popover',
  templateUrl: 'estacao-popover.html',
})
export class EstacaoPopoverPage {
  estacao: Estacao;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    this.estacao = this.navParams.data; 
  }

  ionViewWillEnter(){
    console.log('ionViewDidLoad EstacaoPopoverPage');

    console.log(this.estacao);
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
