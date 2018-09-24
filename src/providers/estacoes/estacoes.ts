import { Estacao } from './../../models/estacao';
import { Injectable } from '@angular/core';

@Injectable()
export class EstacoesProvider {

  estacoes: Estacao[];

  constructor() {
    console.log('Hello EstacoesProvider Provider');

    this.estacoes = [
      { id: 1, nome: 'Jardim Oceânico', geo: { lat: -23.006807, lng: -43.311032}},
      { id: 2, nome: 'São Conrado', geo: { lat: -22.993602, lng: -43.253796}},
      { id: 3, nome: 'Antero de Quental', geo: { lat: -22.9846, lng: -43.223411}},
      { id: 4, nome: 'Jardim de Alah', geo: { lat: -22.983267, lng: -43.215962}},
      { id: 5, nome: 'Nossa Senhora da Paz', geo: { lat: -22.983709, lng: -43.207003}},
      { id: 6, nome: 'General Osório', geo: { lat: -22.98485, lng: -43.19719}},
      { id: 7, nome: 'Cantagalo', geo: { lat: -22.976689, lng: -43.193786}},
      { id: 8, nome: 'Siqueira Campos', geo: { lat: -22.96733, lng: -43.186992}},
      { id: 9, nome: 'Cardeal Arcoverde', geo: { lat: -22.964542, lng: -43.180769}},
      { id: 10, nome: 'Botafogo', geo: { lat: -22.951245, lng: -43.184277}},
      { id: 11, nome: 'Flamengo', geo: { lat: -22.937094, lng: -43.178382}},
      { id: 12, nome: 'Largo do Machado', geo: { lat: -22.930986, lng: -43.178386}},
      { id: 13, nome: 'Catete', geo: { lat: -22.925811, lng: -43.176512}},
      { id: 14, nome: 'Glória', geo: { lat: -22.920475, lng: -43.176592}},
      { id: 15, nome: 'Cinelândia', geo: { lat: -22.911727, lng: -43.175672}},
      { id: 16, nome: 'Carioca', geo: { lat: -22.908246, lng: -43.178521}},
      { id: 17, nome: 'Uruguaiana', geo: { lat: -22.902840, lng: -43.181648}},
      { id: 18, nome: 'Presidente Vargas', geo: { lat: -22.903729, lng: -43.185671}},
      { id: 19, nome: 'Central', geo: { lat: -22.904888, lng: -43.190813}},
      { id: 20, nome: 'Praça Onze', geo: { lat: -22.909987, lng: -43.200482}},
      { id: 21, nome: 'Estácio', geo: { lat: -22.913582, lng: -43.206286}},
      { id: 22, nome: 'Afonso Pena', geo: { lat: -22.918406, lng: -43.217794}},
      { id: 23, nome: 'São Francisco Xavier', geo: { lat: -22.920686, lng: -43.223813}},
      { id: 24, nome: 'Saes Peña', geo: { lat: -22.924429, lng: -43.232749}},
      { id: 25, nome: 'Uruguai', geo: { lat: -22.931978, lng: -43.239674}},
      { id: 26, nome: 'Cidade Nova', geo: { lat: -22.909135, lng: -43.206280}},
      { id: 27, nome: 'São Cristóvão', geo: { lat: -22.909913, lng: -43.220201}},
      { id: 28, nome: 'Maracanã', geo: { lat: -22.909701, lng: -43.233499}},
      { id: 29, nome: 'Triagem', geo: { lat: -22.896947, lng: -43.244560}},
      { id: 30, nome: 'Maria da Graça', geo: { lat: -22.881632, lng: -43.260358}},
      { id: 31, nome: 'Nova América/Del Castilho', geo: { lat: -22.879413, lng: -43.271650}},
      { id: 32, nome: 'Inhaúma', geo: { lat: -22.874678, lng: -43.283436}},
      { id: 33, nome: 'Engenho da Rainha', geo: { lat: -22.867976, lng: -43.297496}},
      { id: 34, nome: 'Thomaz Coelho', geo: { lat: -22.862549, lng: -43.306779}},
      { id: 35, nome: 'Vicente de Carvalho', geo: { lat: -22.853923, lng: -43.313299}},
      { id: 36, nome: 'Irajá', geo: { lat: -22.847844, lng: -43.323918}},
      { id: 37, nome: 'Colégio', geo: { lat: -22.842730, lng: -43.334800}},
      { id: 38, nome: 'Coelho Neto', geo: { lat: -22.831680, lng: -43.343284}},
      { id: 39, nome: 'Acari Fazenda Botafogo', geo: { lat: -22.824696, lng: -43.349727}},
      { id: 40, nome: 'Engenherio Rubens Paiva', geo: { lat: -22.816399, lng: -43.358407}},
      { id: 41, nome: 'Pavuna', geo: { lat: -22.806495, lng: -43.365260}}
      
    ];
  }


  getEstacoes() {
    return this.estacoes;
  }

}
