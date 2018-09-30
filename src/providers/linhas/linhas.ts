import { DatabaseProvider } from './../database/database';
import { Estacao } from './../../models/estacao';
import { Rota } from './../../models/rota';
import { Linha } from './../../models/linha';
import { Injectable } from '@angular/core';

@Injectable()
export class LinhasProvider {
  linhas: Linha[] = [];

  constructor(
    private db: DatabaseProvider
  ) {
    console.log('Hello LinhasProvider Provider');
  }

  getTodasLinhas() {
    this.refreshLinhas();
    return this.linhas;
  }
  
  getLinhasDeUmModal(id) {
    this.refreshLinhas();
    
    let ans: Linha[];
    this.linhas.forEach(linha => {
      if (linha.idModal == id) {
        ans.push(linha);
      }
    })
    return ans;
  }

  refreshLinhas() {
    this.linhas = this.db.getLinhas();
  }


}
