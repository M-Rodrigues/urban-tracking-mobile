import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapaCidadePage } from './mapa-cidade';

@NgModule({
  declarations: [
    MapaCidadePage,
  ],
  imports: [
    IonicPageModule.forChild(MapaCidadePage),
  ],
})
export class MapaCidadePageModule {}
