import { Estacao } from './../../models/estacao';
import { Rota } from './../../models/rota';
import { Linha } from './../../models/linha';
import { Injectable } from '@angular/core';

@Injectable()
export class LinhasProvider {
  linhas: Linha[] = [];

  constructor() {
    console.log('Hello LinhasProvider Provider');
  }

  getTodasLinhas() {
    return [
      {
        id: 1,
        nome: '30 - Alvorada x Galeão - Semidireto',
        idModal: 1,
        rotas: []
      },
      {
        id: 1,
        nome: '30 - Alvorada x Galeão - Semidireto',
        idModal: 1,
        rotas: []
      },
      {
        id: 1,
        nome: '30 - Alvorada x Galeão - Semidireto',
        idModal: 1,
        rotas: []
      },
      {
        id: 1,
        nome: '30 - Alvorada x Galeão - Semidireto',
        idModal: 1,
        rotas: []
      },];
  }

  getLinhasDeUmModal(id) {
    let ans: Linha[];
    this.linhas.forEach(linha => {
      if (linha.idModal == id) {
        ans.push(linha);
      }
    })
    return ans;
  }

  getRotasQuePassamPorUmaEstacao(id) {
    let ans: Rota[];
    
    this.linhas.forEach((linha: Linha) => {
      linha.rotas.forEach((rota: Rota) => {
        rota.estacoes.forEach((estacao: Estacao) => {
          if (estacao.id == id) {
            ans.push(rota);
          }
        });
      });
    });

    return ans;
  }
}
