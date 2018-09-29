import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LinhaPage } from './linha';

@NgModule({
  declarations: [
    LinhaPage,
  ],
  imports: [
    IonicPageModule.forChild(LinhaPage),
  ],
})
export class LinhaPageModule {}
