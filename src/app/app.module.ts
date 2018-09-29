import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

// Componentes
import { LeafletMapComponent } from './../components/leaflet-map/leaflet-map';

// Páginas
import { MapaCidadePage } from './../pages/mapa-cidade/mapa-cidade';
import { LinhaPage } from './../pages/linha/linha';
import { ConsultarLinhasPage } from './../pages/consultar-linhas/consultar-linhas';
import { EstacaoPopoverPage } from '../pages/estacao-popover/estacao-popover';
import { SobreEsteAppPage } from '../pages/sobre-este-app/sobre-este-app';

// Serviços
import { EstacoesProvider } from '../providers/estacoes/estacoes';

// Plugins
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    MapaCidadePage,
    ConsultarLinhasPage,
    LinhaPage,
    SobreEsteAppPage,
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
    MapaCidadePage,
    ConsultarLinhasPage,
    LinhaPage,
    SobreEsteAppPage,
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
