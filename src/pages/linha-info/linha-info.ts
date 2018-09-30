import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import leaflet from 'leaflet';
import 'leaflet-routing-machine';
import { Credentials } from '../../credentials/credentials';
import { Estacao } from '../../models/estacao';
import { EstacaoPopoverPage } from '../estacao-popover/estacao-popover';

@IonicPage()
@Component({
  selector: 'page-linha-info',
  templateUrl: 'linha-info.html',
})
export class LinhaInfoPage {
  map: any;
  L: leaflet;
  routeCtrl: any;
  clickEvent: any;
  rotaEscolhida: number = 0;
  
  linha: any;
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private popoverCtrl: PopoverController
  ) {
    this.L = leaflet;
    this.routeCtrl =

    this.linha = this.navParams.data;

    console.log(this.linha);    
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LinhaInfoPage');
    
    console.log(this.linha);
    
    this.criarMapa();
  }

  criarMapa() {
    // Criando Mapa
    this.map = this.L.map('mapaLinha', {
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

    // Controlador de Rotas
    // this.criarControladorRotas();

    // Exibindo primeira rota dessa linha
    this.escolherRota();
  }

  criarControladorRotas() {
    this.routeCtrl = this.L.Routing.control({
      containerClassName: 'hideDirections',
      waypoints: []
      // TODO Quando for dar o build, colocar pra puxar do Mapbox
      //, router: this.L.Routing.mapbox(Credentials.getMapBoxAccessToken())
      , lineOptions: {
        styles: [
          {color: 'blue', opacity: 0.15, weight: 9}
          , {color: 'light-blue', opacity: 0.8, weight: 6}
          , {color: 'blue', opacity: 1, weight: 2}
        ]
      }
    });
    
    this.routeCtrl.addTo(this.map);
  }

  escolherRota() {
    // Remove os marcadores antigos do mapa

    // Colocar marcadores no mapa indicando as estações dessa rota
    let mkEstacoes = [];

    this.linha.rotas[this.rotaEscolhida].trajeto.forEach((estacao: Estacao) => {
      mkEstacoes.push(estacao.geo);
      
      this.L.marker(estacao.geo)
        .on('click', (ev => {
          this.map.flyTo(estacao.geo);

          let popover = this.popoverCtrl.create(EstacaoPopoverPage, estacao);
          if (this.clickEvent) popover.present({ ev: this.clickEvent });
        }))
        .addTo(this.map);
    })

    // Centralizar mapa nessasestações
    this.map.flyToBounds(mkEstacoes);

    // // Calcula nova Rota
    // this.routeCtrl.setWaypoints(mkEstacoes);
  
    // Marca uma linha passando pelas estações
    this.L.polyline(mkEstacoes, {color: 'red'}).addTo(this.map);
  }

  onClick(ev) {
    this.clickEvent = ev;
  }
  
}