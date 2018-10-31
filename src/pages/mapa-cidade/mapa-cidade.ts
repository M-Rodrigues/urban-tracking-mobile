import { Composicao } from './../../models/composicao';
import { ComposicoesProvider } from './../../providers/composicoes/composicoes';
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
  composicoes: Composicao[];

  estacaoMarkers: any;
  compMarkers: any;
  refresher: any;
  fabIcon: string = 'bus';

  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private menuCtrl: MenuController,
    private popoverCtrl: PopoverController,
    private estacaoService: EstacoesProvider,
    private modalService: ModaisProvider,
    private linhaService: LinhasProvider,
    private composicaoService: ComposicoesProvider
  ) {
    console.log("MapaCidadePage:: Construtor")
    this.L = leaflet;

    Promise.all([
      this.estacaoService.getEstacoesAPI(),
      this.modalService.getModaisAPI(),
      this.composicaoService.getComposicoes()
    ])
    .then((result) => {
      console.log(result);
      this.estacoes = result[0];
      this.criarMapa(this.estacoes);

      this.modais = result[1];
      this.composicoes = result[2];
    })

  }

  ionViewWillEnter(){
    if (this.compMarkers) this.liveReloadComposicoes();
  }

  ionViewWillLeave(){
    clearTimeout(this.refresher);
  }

  criarMapa(estacoes) {
    this.estacoes = estacoes;
    // Criando Mapa
    this.map = this.L.map('mapaCidade', {
      center: [-22.954530252408052, -43.167351521806495],
      zoom: 13,
      zoomControl: false
    }).on('click', (mouseEvent) => {
      console.log(mouseEvent);
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
    // this.adicionarMarcadoresDasEstacoes(estacoes);

    // LiveReload das Composicoes
    this.liveReloadComposicoes();
  }

  liveReloadComposicoes() {
    this.refresher = setInterval(() => {
      this.composicaoService.getComposicoes()
        .then((data: any) => {
          if (data.erro == {}) {
            console.log("Erro no refresh das Composicoes");
          } else {
            if (this.compMarkers) this.removerMarcadoresDasComposicoes(this.compMarkers);
            
            this.compMarkers = [];
            this.composicoes = data;
            this.adicionarMarcadoresDasComposicoes(data);
          }
          console.log(data);
        });
    }, 2000);
  }

  adicionarMarcadoresDasComposicoes(composicoes) {
    composicoes.forEach(composicao => {
      let marcador = this.L.marker(composicao.geo).addTo(this.map);

      this.compMarkers.push(marcador);
    });
  }
  
  adicionarMarcadoresDasEstacoes(estacoes) {
    this.estacaoMarkers = [];
    estacoes.forEach(estacao => {
      let mk = this.L.marker(estacao.geo)
      .on('click', (estacaoEvent => {
        let linhas: Linha[];

        this.linhaService.getLinhasPorEstacao(estacao.id)
        .subscribe((data: Linha[]) => {
          linhas = data;  
          let popover = this.popoverCtrl.create(EstacaoPopoverPage, {estacao: estacao, modais: this.modais, linhas: linhas, refresher: this.refresher }, {cssClass: 'custom-popover'});
          let ev = { target : { getBoundingClientRect : () => { return {
                  
                };
              }
            }
          };
          this.map.flyTo(estacao.geo);

          //console.log(this.clickEvent);
          
          if (this.clickEvent) popover.present({ ev });
        })
      }))
      .addTo(this.map);

      this.estacaoMarkers.push(mk);
    });
  }

  removerMarcadoresDasComposicoes(marcadores) {
    marcadores.forEach(marcador => {
      marcador.removeFrom(this.map);
    });
  }
  
  removerMarcadoresDasEstacoes(estacoes) {
    estacoes.forEach(estacao => {
      estacao.removeFrom(this.map);
    });
    estacoes = [];
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

  onChangeMarkers() {
    if (this.fabIcon == 'bus') {
      //Parar o live reload
      clearTimeout(this.refresher);

      //Retirar os marcadores das composicoes
      this.removerMarcadoresDasComposicoes(this.compMarkers);

      //Colocar os marcadores das estacoes
      this.estacaoService.getEstacoesAPI()
        .then(data => {
          console.log(data);
          this.adicionarMarcadoresDasEstacoes(data);
        })

      
      
      this.fabIcon = 'git-commit';
    } else {
      //Ativar o liveReload das composições
      this.liveReloadComposicoes();

      // Remover os marcadores das estacoes
      this.removerMarcadoresDasEstacoes(this.estacaoMarkers);

      //Colocar os marcadores das Composicoes

      this.fabIcon = 'bus';
    }
  }
}