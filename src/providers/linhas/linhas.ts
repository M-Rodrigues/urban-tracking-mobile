import { DatabaseProvider } from './../database/database';
import { Linha } from './../../models/linha';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LinhasProvider {
  linhas: Linha[] = [];

  constructor(
    private db: DatabaseProvider,
    public httpClient: HttpClient
  ) {
    console.log('Hello LinhasProvider Provider');
  }

  getTodasLinhas() {
    this.refreshLinhas();
    return this.linhas;
  }

  getLinhasAPI() {
    return this.httpClient.get("https://stark-woodland-16146.herokuapp.com/linhas");
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
    let index = 0;
    for (let i = 0; i < linha.rotas.length; i++) {
      if (linha.rotas[i].id == rota.id) {
        index = i;
      }
    }
    return index;
  }

  getLinhasPorEstacao(id: number) {
    return this.httpClient.get("https://stark-woodland-16146.herokuapp.com/linhas/estacao/" + id);
  }

  refreshLinhas() {
    this.linhas = this.db.getLinhas();
  }


}
