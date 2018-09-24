import { Component, ViewChild, ElementRef } from '@angular/core';
import { AlertController, PopoverController } from 'ionic-angular';
import { Credentials } from './../../credentials/credentials';
import leaflet from 'leaflet';
import 'leaflet-routing-machine';

import { Estacao } from './../../models/estacao';

import { EstacoesProvider } from './../../providers/estacoes/estacoes';

import { EstacaoPopoverPage } from '../../pages/estacao-popover/estacao-popover';

@Component({
  selector: 'leaflet-map',
  templateUrl: 'leaflet-map.html'
})
export class LeafletMapComponent {
  @ViewChild('mapbox') mapContainer: ElementRef;
  // @Input() MapSize: any;

  L: leaflet
  map: any;
  rota: any[];
  estacoes: Estacao[];
  RouteCtrl: any;
  clickEvent: any;

  constructor(private alertCtrl: AlertController,
              private popoverCtrl: PopoverController,
              private estacoesProvider: EstacoesProvider) {
      this.L = leaflet;
  }
  
  ngOnInit() {
    console.log('Hello LeafletMapComponent Component');
    this.rota = [];

    this.estacoes = this.estacoesProvider.getEstacoes();

    this.loadMap();
  }

  loadMap() {
    console.log('Loading Map Component...');

    // Criando o mapa
    this.map = this.L.map('mapbox', {
      center: [-22.954530252408052, -43.167351521806495],
      zoom: 13
    });
    
    // Mapa centraliza nessas coordenadas com animação zoomIn
    this.map.flyTo([-22.954530252408052, -43.167351521806495],15);

    this.L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      atribuitions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: Credentials.getMapBoxAccessToken()
    }).addTo(this.map);

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

    /*
    // Evento de click para gerar marcador
    this.map.on('click', (event) => {
      console.log('Map clicked!');
      
      this.map.flyTo([event.latlng.lat,event.latlng.lng]);
      
      // Marcador onde o usuário clicou
      let estacao = this.L.marker([event.latlng.lat, event.latlng.lng],{
        draggable: true
      })
      .on('click', (markerEvent) => {
        console.log('Marker clicked!');
        console.log(markerEvent);
        // let alert = this.alertCtrl.create({
        //   title: 'Clicando no marcador',
        //   message: 'Marcador clicado',
        //   buttons: ['Ok!']
        // });
        // alert.present();   
        
        let popover = this.popoverCtrl.create(PopoverTestPage);
        if (this.event) popover.present({ ev: this.event });
      })
      .on('dragend', (markerEvent) => {
        console.log('Marker finished drag!');
        console.log(markerEvent);
        
        // Move o mapa para a posição onde o usuário largou o marcador
        this.map.flyTo([markerEvent.target._latlng.lat,markerEvent.target._latlng.lng]);
      });
      
      this.estacoes.push(estacao);
      
      this.rota.push([event.latlng.lat, event.latlng.lng]);
      
      this.refreshRoute();

      console.log(this.estacoes);
    });
    */

    /*
    // Criando o controlador de rotas
    this.RouteCtrl = this.L.Routing.control({
      containerClassName: 'hideDirections',
      waypoints: this.rota
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
    
    this.RouteCtrl.addTo(this.map);
    */
  }

  refreshRoute() {
    // Removendo as estações do mapa
    //this.estacoes.forEach(marker => marker.removeFrom(this.map));

    // Colocando a nova rota
    //this.RouteCtrl.setWaypoints(this.rota);

    // Colocando as estacoes novamente
    //this.estacoes.forEach(marker => marker.addTo(this.map));

    //console.log(this.RouteCtrl.getRouter());

    //this.map.flyToBounds(this.rota,{ padding: [10,10] });
  }

  onClick(event) {
    console.log("Click sobre o mapa!");
    //console.log(event);

    this.clickEvent = event;
  }
}

