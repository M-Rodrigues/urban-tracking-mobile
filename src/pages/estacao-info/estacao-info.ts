import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Modal } from '../../models/modal';
import { Estacao } from '../../models/estacao';
import { Linha } from '../../models/linha';
import { LinhaInfoPage } from '../linha-info/linha-info';

@IonicPage()
@Component({
  selector: 'page-estacao-info',
  templateUrl: 'estacao-info.html',
})
export class EstacaoInfoPage {
  modal: Modal;
  estacao: Estacao;
  linhas: Linha[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toastCtrl: ToastController
  ) {
    this.modal = this.navParams.data.modal;
    this.estacao = this.navParams.data.estacao;
    this.linhas = this.navParams.data.linhas;
  }

  onToLinhaPage(linha) {
    if (linha.rotas.length == 0) {
      this.toastCtrl.create({
        message: 'Linha não possui rotas cadastradas ainda...',
        duration: 4000
      }).present();
    } else {
      this.navCtrl.push(LinhaInfoPage,linha);
    }
  }

}
