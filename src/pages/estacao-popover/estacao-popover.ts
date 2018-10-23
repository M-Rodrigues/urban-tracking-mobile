import { Estacao } from './../../models/estacao';
import { Modal } from './../../models/modal';
import { Linha } from './../../models/linha';
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { LinhasProvider } from '../../providers/linhas/linhas';

@Component({
  selector: 'page-estacao-popover',
  templateUrl: 'estacao-popover.html',
})
export class EstacaoPopoverPage {
  estacao: Estacao;
  modal: Modal;
  linhas: Linha[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private linhaService: LinhasProvider  
  ) {
    this.estacao = this.navParams.data.estacao;
    let aux : Modal[] = this.navParams.data.modais;
    this.modal =  aux.find((modal: Modal) => { return modal.id == this.estacao.idModal });

    this.linhaService.getLinhasPorEstacao(this.estacao.id)
      .subscribe((data: Linha[]) => {
        this.linhas = data;
        console.log(this.linhas);
      })
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
