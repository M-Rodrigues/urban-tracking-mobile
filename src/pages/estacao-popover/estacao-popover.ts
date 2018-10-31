import { Estacao } from './../../models/estacao';
import { Modal } from './../../models/modal';
import { Linha } from './../../models/linha';
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, App } from 'ionic-angular';
import { EstacaoInfoPage } from '../estacao-info/estacao-info';

@Component({
  selector: 'page-estacao-popover',
  templateUrl: 'estacao-popover.html',
})
export class EstacaoPopoverPage {
  estacao: Estacao;
  modal: Modal;
  linhas: Linha[];

  refresher: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public appCtrl: App 
  ) {
    this.estacao = this.navParams.data.estacao;
    this.linhas = this.navParams.data.linhas;

    let aux : Modal[] = this.navParams.data.modais;
    this.modal =  aux.find((modal: Modal) => { return modal.id == this.estacao.idModal });
    this.refresher = this.navParams.data.refresher;
  }

  ionViewWillEnter(){
    console.log('ionViewDidLoad EstacaoPopoverPage');

    console.log(this.estacao);
    console.log(this.modal);
  }

  close() {
    this.viewCtrl.dismiss();
    this.appCtrl.getRootNav().push(EstacaoInfoPage, {estacao: this.estacao, modal: this.modal, linhas: this.linhas, refresher: this.refresher});
  }

}
