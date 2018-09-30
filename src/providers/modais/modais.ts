import { DatabaseProvider } from './../database/database';
import { Injectable } from '@angular/core';
import { Modal } from './../../models/modal';

@Injectable()
export class ModaisProvider {
  modais: Modal[];

  constructor(
    private db: DatabaseProvider
  ) {
    this.refreshModais();
    console.log('Hello ModaisProvider Provider');
  }

  getTodosModais() {
    this.refreshModais();
    return this.modais;
  }
  
  getModal(idModal) {
    this.refreshModais();
    
    return this.db.getModal(idModal);
  }
  
  refreshModais() {
    this.modais = this.db.getModais();
  }
}
