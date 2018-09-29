import { ModaisProvider } from './../../providers/modais/modais';
import { Linha } from './../../models/linha';
import { LinhaInfoPage } from './../linha-info/linha-info';
import { LinhasProvider } from './../../providers/linhas/linhas';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-consultar-linhas',
  templateUrl: 'consultar-linhas.html',
})
export class ConsultarLinhasPage {
  linhas: Linha[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private menuCtrl: MenuController,
    private linhaService: LinhasProvider,
    private modalService: ModaisProvider) {
  }


  ionViewWillEnter(){
    this.loadLinhas();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultarLinhasPage');
  }
  
  loadLinhas() {
    this.linhas = this.linhaService.getTodasLinhas();
  }

  showMenu() {
    this.menuCtrl.open();
  }

  setFilter() {
    console.log("Popover ou Alert com check box");
  }

  buscarLinha(searchEvent){
    console.log(searchEvent);
  }

  onLinhaInfo(linha) {
    console.log(linha);
    this.navCtrl.push(LinhaInfoPage,linha);
  }

  nomeModal(idModal) {
    return this.modalService.getNomeModalById(idModal);
  }

  selectModalIcon(id){
    let icons = ['bus','subway'];
    return icons[id];
  }

}
