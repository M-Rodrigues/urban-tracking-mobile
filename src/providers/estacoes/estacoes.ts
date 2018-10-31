import { DatabaseProvider } from './../database/database';
import { Estacao } from './../../models/estacao';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EstacoesProvider {
  estacoes: Estacao[];

  constructor(
    private db: DatabaseProvider,
    public httpClient: HttpClient
  ) {
    this.refreshEstacoes();
    console.log('Hello EstacoesProvider Provider');
  }


  getTodasEstacoes() {  
    this.refreshEstacoes();
    return this.estacoes;
  }
  
  getEstaçõesDeUmModal(id) {
    this.refreshEstacoes();

    let ans: Estacao[];
    this.estacoes.forEach(estacao => {
      if (estacao.idModal == id) {
        ans.push(estacao);
      }
    })
    return ans;
  }
  
  refreshEstacoes() {
    this.estacoes = this.db.getEstacoes();
  }

  getEstacoesAPI() {
    return this.httpClient.get("https://stark-woodland-16146.herokuapp.com/estacoes").toPromise();
  }
}
