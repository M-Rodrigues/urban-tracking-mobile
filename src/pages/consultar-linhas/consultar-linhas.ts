import { ModaisProvider } from './../../providers/modais/modais';
import { Linha } from './../../models/linha';
import { LinhaInfoPage } from './../linha-info/linha-info';
import { LinhasProvider } from './../../providers/linhas/linhas';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-consultar-linhas',
  templateUrl: 'consultar-linhas.html',
})
export class ConsultarLinhasPage {
  modais: any[];
  linhas: Linha[];
  linhasList: any;
  filtros: any[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private menuCtrl: MenuController,
    private alertCtrl: AlertController,
    private linhaService: LinhasProvider,
    private modalService: ModaisProvider,
    private toastCtrl: ToastController
  ) {
    this.loadLinhas();
    
    this.modais = this.modalService.getTodosModais(); 
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultarLinhasPage');

    this.filtros = [];
    this.modais.forEach(modal => {
      this.filtros.push(modal.id+'');
    });
  }
  
  // Faz requisição para buscar as linhas do sistema
  loadLinhas() {
    this.linhas = this.linhaService.getTodasLinhas();
    this.linhasList = this.linhas;
  }

  // Abre menu lateral
  showMenu() { this.menuCtrl.open(); }

  // Abre o popover ou alert para o ususario escolher o filtro das linha (só modal)
  setFilter() {
    console.log("Popover ou Alert com check box");

    let alert = this.alertCtrl.create({
      title: 'Exibir Modais'
    });
    
    let modais = this.modalService.getTodosModais();
    modais.forEach(modal => {
      alert.addInput({
        type: 'checkbox',
        label: modal.nome,
        checked: this.isModalSelecionado(modal.id),
        value: modal.id+''
      });
      console.log(this.isModalSelecionado(modal.id));
    });

    alert.addButton({
      text: 'Ok',
      handler: (data) => {
        this.filtros = data;

        this.aplicarFiltroNasLinhas();
      }
    })

    alert.present();
  }

  // Filtro das linhas por modal
  isModalSelecionado(id) {
    let flag = 0;
    this.filtros.forEach(idModal => {
      if (idModal == id) {
        flag = 1;
      }
    });
    return flag == 1;
  }

  aplicarFiltroNasLinhas() {
    this.linhasList = [];

    this.linhas.forEach(linha => {
      if (this.isModalSelecionado(linha.idModal)) {
        this.linhasList.push(linha);
      }
    });
  }
  

  // Filtra as linha em tempo real buscando o trecho de texto no nome da linha e no nome das rotas dessa linha
  buscarLinha(searchEvent){
    console.log(searchEvent);
  }

  // Vai pra página de informações da linha
  onLinhaInfo(linha) {
    if (linha.rotas.length == 0) {
      this.toastCtrl.create({
        message: 'Linha não possui rotas cadastradas ainda...',
        duration: 4000
      }).present();
    } else {
      this.navCtrl.push(LinhaInfoPage,linha);
    }

  }

  // Busca o nome do modal
  nomeModal(idModal) {
    return this.modalService.getModal(idModal).nome;
  }

  // escolhe o nome para o ion-icon na lista de todas as linhas
  selectModalIcon(id){
    let icons = ['subway','bus','train'];
    return icons[id-1];
  }

}
