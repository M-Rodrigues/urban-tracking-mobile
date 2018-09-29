import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstacaoInfoPage } from './estacao-info';

@NgModule({
  declarations: [
    EstacaoInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(EstacaoInfoPage),
  ],
})
export class EstacaoInfoPageModule {}
