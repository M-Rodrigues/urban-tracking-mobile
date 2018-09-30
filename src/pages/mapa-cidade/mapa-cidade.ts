import { DatabaseProvider } from './../../providers/database/database';
import { EstacoesProvider } from './../../providers/estacoes/estacoes';
import { Component } from '@angular/core';
import { NavController, AlertController, MenuController, PopoverController } from 'ionic-angular';
import leaflet from 'leaflet';
import { Credentials } from '../../credentials/credentials';
import { Estacao } from '../../models/estacao';
import { EstacaoPopoverPage } from '../estacao-popover/estacao-popover';

@Component({
  selector: 'page-mapa-cidade',
  templateUrl: 'mapa-cidade.html',
})
export class MapaCidadePage {
  map: any;
  L: leaflet;
  clickEvent: any;
  estacoes: Estacao[];

  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private menuCtrl: MenuController,
    private popoverCtrl: PopoverController,
    private estacaoService: EstacoesProvider,
    private db: DatabaseProvider
  ) {
    console.log("MapaCidadePage::")
    this.L = leaflet;
    this.estacoes = this.estacaoService.getTodasEstacoes();

    // console.log("::db.getModais()")
    // console.log(this.db.getModais());
    // console.log("::db.getEstacoes()")
    // console.log(this.db.getEstacoes());
    // console.log("::db.getEstacao(4)")
    // console.log(this.db.getEstacao(4));
    // console.log("::db.getLinhas()")
    // console.log(this.db.getLinhas());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaCidadePage');

    this.criarMapa();
  }
  
  criarMapa() {
    // Criando Mapa
    this.map = this.L.map('mapaCidade', {
      center: [-22.954530252408052, -43.167351521806495],
      zoom: 13,
      zoomControl: false
    });
  
    // Adicionando a Layer com o mapa do mapbox
    this.L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      atribuitions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: Credentials.getMapBoxAccessToken()
    }).addTo(this.map);
  
    // Centralizar o Mapa com animação
    this.map.flyTo([-22.954530252408052, -43.167351521806495],14);
    
    // Marcador para cada estacao
    this.estacoes.forEach(estacao => {
      this.L.marker(estacao.geo)
        .on('click', (estacaoEvent => {
          //console.log(estacaoEvent);
          this.map.flyTo(estacao.geo);

          let popover = this.popoverCtrl.create(EstacaoPopoverPage, estacao);
          if (this.clickEvent) popover.present({ ev: this.clickEvent });
        }))
        .addTo(this.map);
    });
  }

  onLocate() {
    console.log('MapaCidadePage::onLocate()');
    
    this.alertCtrl.create({
      title: 'Localização GPS',
      message: 'Em breve, feature de georreferenciamento',
      buttons: ['Ok']
    }).present(); 
  }

  onClick(event) {
    this.clickEvent = event;
  }

  onShowMenu() {
    this.menuCtrl.open();
  }
}