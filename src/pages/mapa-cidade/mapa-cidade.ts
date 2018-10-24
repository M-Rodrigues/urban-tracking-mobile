import { Component } from '@angular/core';
import leaflet from 'leaflet';

import { NavController, AlertController, MenuController, PopoverController } from 'ionic-angular';

import { EstacaoPopoverPage } from '../estacao-popover/estacao-popover';

import { Estacao } from './../../models/estacao';
import { Modal } from './../../models/modal';
import { Linha } from '../../models/linha';
import { Credentials } from '../../credentials/credentials';

import { EstacoesProvider } from './../../providers/estacoes/estacoes';
import { ModaisProvider } from '../../providers/modais/modais';
import { LinhasProvider } from './../../providers/linhas/linhas';

@Component({
  selector: 'page-mapa-cidade',
  templateUrl: 'mapa-cidade.html',
})
export class MapaCidadePage {
  map: any;
  L: leaflet;
  clickEvent: any;
  estacoes: Estacao[];
  modais: Modal[];

  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private menuCtrl: MenuController,
    private popoverCtrl: PopoverController,
    private estacaoService: EstacoesProvider,
    private modalService: ModaisProvider,
    private linhaService: LinhasProvider
  ) {
    console.log("MapaCidadePage:: Construtor")
    this.L = leaflet;

    this.estacaoService.getEstacoesAPI()
      .subscribe((data: Estacao[]) => {
        this.estacoes = data;
        this.criarMapa(data);
      });
    
    this.modalService.getModaisAPI()
      .subscribe((data: Modal[]) => {
        this.modais = data;
      })  
  }

  criarMapa(estacoes) {
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
    this.adicionarMarcadoresDasEstacoes(estacoes);
  }

  adicionarMarcadoresDasEstacoes(estacoes) {
    estacoes.forEach(estacao => {
      this.L.marker(estacao.geo)
      
      .on('click', (estacaoEvent => {
        let linhas: Linha[];

        this.linhaService.getLinhasPorEstacao(estacao.id)
        .subscribe((data: Linha[]) => {
          linhas = data;  
          let popover = this.popoverCtrl.create(EstacaoPopoverPage, {estacao: estacao, modais: this.modais, linhas: linhas }, {cssClass: 'custom-popover'});
          let ev = { target : { getBoundingClientRect : () => { return {
                  
                };
              }
            }
          };
          this.map.flyTo(estacao.geo);

          console.log(this.clickEvent);
          
          // if (this.clickEvent) popover.present(this.clickEvent);
          if (this.clickEvent) popover.present({ ev });
        })
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