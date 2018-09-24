import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { LeafletMapComponent } from './../components/leaflet-map/leaflet-map';
import { MapaCidadePage } from './../pages/mapa-cidade/mapa-cidade';

import { Geolocation } from '@ionic-native/geolocation';
import { EstacoesProvider } from '../providers/estacoes/estacoes';
import { EstacaoPopoverPage } from '../pages/estacao-popover/estacao-popover';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapaCidadePage,
    LeafletMapComponent,
    EstacaoPopoverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapaCidadePage,
    EstacaoPopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    EstacoesProvider
  ]
})
export class AppModule {}
