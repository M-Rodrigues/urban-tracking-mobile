import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstacaoPopoverPage } from './estacao-popover';

@NgModule({
  declarations: [
    EstacaoPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(EstacaoPopoverPage),
  ],
})
export class EstacaoPopoverPageModule {}
