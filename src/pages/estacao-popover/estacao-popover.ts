import { ModaisProvider } from './../../providers/modais/modais';
import { Estacao } from './../../models/estacao';
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-estacao-popover',
  templateUrl: 'estacao-popover.html',
})
export class EstacaoPopoverPage {
  estacao: Estacao;
  modal: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private modaisService: ModaisProvider
  ) {
    this.estacao = this.navParams.data;
    this.modal =  this.modaisService.getNomeModalById(this.estacao.idModal);
  }

  ionViewWillEnter(){
    console.log('ionViewDidLoad EstacaoPopoverPage');

    console.log(this.estacao);
    console.log(this.modal);
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
