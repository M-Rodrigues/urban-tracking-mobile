import { DatabaseProvider } from './../database/database';
import { Injectable } from '@angular/core';
import { Modal } from './../../models/modal';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ModaisProvider {
  modais: Modal[];

  constructor(
    private db: DatabaseProvider,
    public httpClient: HttpClient

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

  getModaisAPI() {
    return this.httpClient.get('https://stark-woodland-16146.herokuapp.com/modais').toPromise();
  }
}
