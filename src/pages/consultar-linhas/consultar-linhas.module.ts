import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultarLinhasPage } from './consultar-linhas';

@NgModule({
  declarations: [
    ConsultarLinhasPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultarLinhasPage),
  ],
})
export class ConsultarLinhasPageModule {}
