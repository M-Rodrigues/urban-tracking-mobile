import { Credentials } from './../../credentials/credentials';
import { Component, ViewChild, ElementRef } from '@angular/core';
import leaflet from 'leaflet';
import 'leaflet-routing-machine';

@Component({
  selector: 'leaflet-map',
  templateUrl: 'leaflet-map.html'
})
export class LeafletMapComponent {
  @ViewChild('mapbox') mapContainer: ElementRef;
  // @Input() MapSize: any;

  L: leaflet;
  map: any;
  rota: any[];
  RouteCtrl: any;

  constructor() {
      this.L = leaflet;
  }
  
  ngOnInit() {
    console.log('Hello LeafletMapComponent Component');
    // this.rota = [
    //   [-22.954530252408052, -43.167351521806495],
    //   [-22.910994831471506,-43.16842193189662]
    // ];
    this.rota = [];

    this.loadMap();
  }

  loadMap() {
    console.log('Loading Map Component...');

    // Criando o mapa
    this.map = this.L.map('mapbox', {
      center: [-22.954530252408052, -43.167351521806495],
      zoom: 13
    });

    this.L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      atribuitions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: Credentials.getMapBoxAccessToken()
    }).addTo(this.map);

    // Adicionando o marker de localização do usuario
    // this.L.marker([51.505, -0.09]).addTo(this.map);

    // Mapa centraliza nessas coordenadas com animação zoomIn
    this.map.flyTo([-22.954530252408052, -43.167351521806495],15);


    // Evento de click para gerar marcador
    this.map.on('click', (event) => {
      console.log('Map clicked!');
      console.log("Lat: " + event.latlng.lat);
      console.log("Lng: " + event.latlng.lng);

      this.map.flyTo([event.latlng.lat,event.latlng.lng]);

      // Marcador onde o usuário clicou
      this.L.marker([event.latlng.lat, event.latlng.lng],{
        draggable: true
      })
        .on('click', (markerEvent) => {
          console.log('Marker clicked!');
          console.log(markerEvent);
        })
        .on('dragend', (markerEvent) => {
          console.log('Marker finished drag!');
          console.log(markerEvent);

          // Move o mapa para a posição onde o usuário largou o marcador
          this.map.flyTo([markerEvent.target._latlng.lat,markerEvent.target._latlng.lng]);
        })
        .addTo(this.map);

        this.rota.push([event.latlng.lat, event.latlng.lng]);
        this.refreshRoute();
    });


    // Criando o controlador de rotas
    this.RouteCtrl = this.L.Routing.control({
      containerClassName: 'hideDirections',
      waypoints: this.rota
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
  }

  refreshRoute() {
    this.RouteCtrl.setWaypoints(this.rota);

    console.log(this.RouteCtrl.getRouter());

    this.map.flyToBounds(this.rota,{
      padding: [10,10]
    });
  }

}

// -22.954530252408052
// -43.167351521806495

