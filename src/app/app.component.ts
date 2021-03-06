import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MapaCidadePage } from '../pages/mapa-cidade/mapa-cidade';
import { ConsultarLinhasPage } from './../pages/consultar-linhas/consultar-linhas';
import { SobreEsteAppPage } from './../pages/sobre-este-app/sobre-este-app';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = MapaCidadePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  toConsultarLilhas() {
    this.rootPage = ConsultarLinhasPage;
  }

  toMapaCidade() {
    this.rootPage = MapaCidadePage;
  }

  toSobreEsteApp() {
    this.rootPage = SobreEsteAppPage;
  }


}

