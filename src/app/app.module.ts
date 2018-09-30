import { TruncatePipe } from './../pipes/truncate/truncate';
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
import { ConsultarLinhasPage } from './../pages/consultar-linhas/consultar-linhas';
import { EstacaoPopoverPage } from '../pages/estacao-popover/estacao-popover';
import { SobreEsteAppPage } from '../pages/sobre-este-app/sobre-este-app';
import { EstacaoInfoPage } from './../pages/estacao-info/estacao-info';
import { LinhaInfoPage } from './../pages/linha-info/linha-info';

// Serviços
import { EstacoesProvider } from '../providers/estacoes/estacoes';
import { ModaisProvider } from '../providers/modais/modais';
import { LinhasProvider } from '../providers/linhas/linhas';

// Plugins
import { Geolocation } from '@ionic-native/geolocation';
import { DatabaseProvider } from '../providers/database/database';

@NgModule({
  declarations: [
    LeafletMapComponent,
    MyApp,
    TruncatePipe,
    MapaCidadePage,
    ConsultarLinhasPage,
    SobreEsteAppPage,
    EstacaoPopoverPage,
    LinhaInfoPage,
    EstacaoInfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    LeafletMapComponent,
    MyApp,
    MapaCidadePage,
    ConsultarLinhasPage,
    SobreEsteAppPage,
    EstacaoPopoverPage,
    LinhaInfoPage,
    EstacaoInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    EstacoesProvider,
    ModaisProvider,
    LinhasProvider,
    DatabaseProvider
  ]
})
export class AppModule {}
