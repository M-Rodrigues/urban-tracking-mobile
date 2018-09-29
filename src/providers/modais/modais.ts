import { Injectable } from '@angular/core';
import { Modal } from './../../models/modal';

@Injectable()
export class ModaisProvider {
  modais: Modal[];

  constructor() {
    console.log('Hello ModaisProvider Provider');
    this.modais = [
      {
        id: 1,
        nome: 'Metrô'
      },
      {
        id: 2,
        nome: 'BRT'
      },
      {
        id: 3,
        nome: 'VLT'
      }
    ];
  }


  getTodosModais() {
    return this.modais;
  }

  getNomeModalById(idModal) {
    let nomeModal: string;
    
    this.modais.forEach(modal => {
      if (modal.id === idModal)
        nomeModal = modal.nome;
    });
    
    return nomeModal;
  }
}
