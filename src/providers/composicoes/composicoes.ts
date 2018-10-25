import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ComposicoesProvider {

  constructor(public httpClient: HttpClient) {
    console.log('Hello ComposicoesProvider Provider');
  }

  getComposicoes() {
    return this.httpClient.get('https://stark-woodland-16146.herokuapp.com/composicoes').toPromise();
  }
}
