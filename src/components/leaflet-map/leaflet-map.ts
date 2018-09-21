import { Credentials } from './../../credentials/credentials';
import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import leaflet from 'leaflet';

@Component({
  selector: 'leaflet-map',
  templateUrl: 'leaflet-map.html'
})
export class LeafletMapComponent {
  @ViewChild('mapbox') mapContainer: ElementRef;
  @Input() MapSize: any;

  L: leaflet;
  map: any;

  constructor(private geolocation: Geolocation) {
      this.L = leaflet;
  }
  
  ngOnInit() {
    console.log('Hello LeafletMapComponent Component');
    this.loadMap();
  }

  loadMap() {
    console.log('Loading Map Component...');

    // Criando o mapa
    this.map = this.L.map('mapbox', {
      center: [51.505, -0.09],
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
    this.L.marker([51.505, -0.09]).addTo(this.map);

    // Mapa centraliza nessas coordenadas com animação
    this.map.flyTo([51.505, -0.09],15);
  }

}
