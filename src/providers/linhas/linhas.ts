import { DatabaseProvider } from './../database/database';
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
  
  getRotaIndex(linha, rota) {
    console.log("Procurando rota: " + rota.nome + " na linha: " + linha.nome);
    let index = 0;
    for (let i = 0; i < linha.rotas.length; i++) {
      console.log(linha.rotas[i].id + " - " + rota.id);
      if (linha.rotas[i].id == rota.id) {
        index = i;
      }
    }
    console.log("index: "+index);
    return index;
  }

  refreshLinhas() {
    this.linhas = this.db.getLinhas();
  }


}
