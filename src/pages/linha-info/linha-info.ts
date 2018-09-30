import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, LoadingController } from 'ionic-angular';
import leaflet from 'leaflet';
import 'leaflet-routing-machine';
import { Credentials } from '../../credentials/credentials';
import { Estacao } from '../../models/estacao';
import { LinhasProvider } from '../../providers/linhas/linhas';

@IonicPage()
@Component({
  selector: 'page-linha-info',
  templateUrl: 'linha-info.html',
})
export class LinhaInfoPage {
  map: any;
  L: leaflet;
  routeCtrl: any;
  rotaEscolhida: number = 0;
  trajetoRota: any[];
  polyline: any;
  nomeRota: string;
  nomeLinha: string;
  marcadoresDeEstacao: any[] = [];
  linha: any;
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private actSheetCtrl: ActionSheetController,
    private loadingCtrl: LoadingController,
    private linhaService: LinhasProvider
  ) {
    this.L = leaflet;
    this.linha = this.navParams.data;  

    this.refreshNomeRota();
    this.refreshTrajetoRota();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LinhaInfoPage');
    
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

    // Polyline
    this.polyline = this.L.polyline([], {
      color: 'red', 
    });
    this.polyline.addTo(this.map);

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
    let loading = this.loadingCtrl.create();
    loading.present();
    
    // Remove os marcadores antigos do mapa
    this.removerMarcadoresDoMapa();

    // Colocar marcadores no mapa indicando as estações dessa rota
    let mkEstacoes = [];

    this.linha.rotas[this.rotaEscolhida].trajeto.forEach((estacao: Estacao) => {
      mkEstacoes.push(estacao.geo);

      let marker = this.L.marker(estacao.geo);      
      marker.addTo(this.map);

      this.marcadoresDeEstacao.push(marker);  
    })

    // Centralizar mapa nessasestações
    this.map.flyToBounds(mkEstacoes);
  
    // Marca uma linha passando pelas estações
   this.refreshPolyline(mkEstacoes);

    loading.dismiss();
  }

  // Action Sheet com as rotas possíveis
  onEscolherRota() {
    let action = this.actSheetCtrl.create();

    this.linha.rotas.forEach(rota => {
      action.addButton({
        text: rota.nome,
        handler: () => {
          this.rotaEscolhida = this.linhaService.getRotaIndex(this.linha, rota);

          this.refreshNomeRota();
          this.refreshTrajetoRota();

          this.escolherRota();
        }
      });
    });

    action.present();
  }

  focarNumaEstacao(estacao) {
    this.map.flyTo(estacao.geo,15);
  }


  
  refreshNomeRota() { 
    this.nomeRota = this.linha.rotas[this.rotaEscolhida].nome; 
  }

  refreshTrajetoRota() {
    this.trajetoRota = this.linha.rotas[this.rotaEscolhida].trajeto;
  }

  refreshPolyline(latLng) {
    this.polyline.setLatLngs(latLng, {color: 'red'});
  }

  removerMarcadoresDoMapa() {
    this.marcadoresDeEstacao.forEach(marker => marker.removeFrom(this.map) );
    this.marcadoresDeEstacao = [];
  }  
}