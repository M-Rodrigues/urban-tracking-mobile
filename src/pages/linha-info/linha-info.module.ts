import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LinhaInfoPage } from './linha-info';

@NgModule({
  declarations: [
    LinhaInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(LinhaInfoPage),
  ],
})
export class LinhaInfoPageModule {}
