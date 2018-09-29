import { Estacao } from './../../models/estacao';
import { Injectable } from '@angular/core';

@Injectable()
export class EstacoesProvider {

  estacoes: Estacao[];

  constructor() {
    console.log('Hello EstacoesProvider Provider');

    this.estacoes = [
      { id: 1, nome: 'Jardim Oceânico', geo: { lat: -23.006807, lng: -43.311032},tipoModal: 'Metrô'},
      { id: 2, nome: 'São Conrado', geo: { lat: -22.993602, lng: -43.253796},tipoModal: 'Metrô'},
      { id: 3, nome: 'Antero de Quental', geo: { lat: -22.9846, lng: -43.223411},tipoModal: 'Metrô'},
      { id: 4, nome: 'Jardim de Alah', geo: { lat: -22.983267, lng: -43.215962},tipoModal: 'Metrô'},
      { id: 5, nome: 'Nossa Senhora da Paz', geo: { lat: -22.983709, lng: -43.207003},tipoModal: 'Metrô'},
      { id: 6, nome: 'General Osório', geo: { lat: -22.98485, lng: -43.19719},tipoModal: 'Metrô'},
      { id: 7, nome: 'Cantagalo', geo: { lat: -22.976689, lng: -43.193786},tipoModal: 'Metrô'},
      { id: 8, nome: 'Siqueira Campos', geo: { lat: -22.96733, lng: -43.186992},tipoModal: 'Metrô'},
      { id: 9, nome: 'Cardeal Arcoverde', geo: { lat: -22.964542, lng: -43.180769},tipoModal: 'Metrô'},
      { id: 10, nome: 'Botafogo', geo: { lat: -22.951245, lng: -43.184277},tipoModal: 'Metrô'},
      { id: 11, nome: 'Flamengo', geo: { lat: -22.937094, lng: -43.178382},tipoModal: 'Metrô'},
      { id: 12, nome: 'Largo do Machado', geo: { lat: -22.930986, lng: -43.178386},tipoModal: 'Metrô'},
      { id: 13, nome: 'Catete', geo: { lat: -22.925811, lng: -43.176512},tipoModal: 'Metrô'},
      { id: 14, nome: 'Glória', geo: { lat: -22.920475, lng: -43.176592},tipoModal: 'Metrô'},
      { id: 15, nome: 'Cinelândia', geo: { lat: -22.911727, lng: -43.175672},tipoModal: 'Metrô'},
      { id: 16, nome: 'Carioca', geo: { lat: -22.908246, lng: -43.178521},tipoModal: 'Metrô'},
      { id: 17, nome: 'Uruguaiana', geo: { lat: -22.902840, lng: -43.181648},tipoModal: 'Metrô'},
      { id: 18, nome: 'Presidente Vargas', geo: { lat: -22.903729, lng: -43.185671},tipoModal: 'Metrô'},
      { id: 19, nome: 'Central', geo: { lat: -22.904888, lng: -43.190813},tipoModal: 'Metrô'},
      { id: 20, nome: 'Praça Onze', geo: { lat: -22.909987, lng: -43.200482},tipoModal: 'Metrô'},
      { id: 21, nome: 'Estácio', geo: { lat: -22.913582, lng: -43.206286},tipoModal: 'Metrô'},
      { id: 22, nome: 'Afonso Pena', geo: { lat: -22.918406, lng: -43.217794},tipoModal: 'Metrô'},
      { id: 23, nome: 'São Francisco Xavier', geo: { lat: -22.920686, lng: -43.223813},tipoModal: 'Metrô'},
      { id: 24, nome: 'Saes Peña', geo: { lat: -22.924429, lng: -43.232749},tipoModal: 'Metrô'},
      { id: 25, nome: 'Uruguai', geo: { lat: -22.931978, lng: -43.239674},tipoModal: 'Metrô'},
      { id: 26, nome: 'Cidade Nova', geo: { lat: -22.909135, lng: -43.206280},tipoModal: 'Metrô'},
      { id: 27, nome: 'São Cristóvão', geo: { lat: -22.909913, lng: -43.220201},tipoModal: 'Metrô'},
      { id: 28, nome: 'Maracanã', geo: { lat: -22.909701, lng: -43.233499},tipoModal: 'Metrô'},
      { id: 29, nome: 'Triagem', geo: { lat: -22.896947, lng: -43.244560},tipoModal: 'Metrô'},
      { id: 30, nome: 'Maria da Graça', geo: { lat: -22.881632, lng: -43.260358},tipoModal: 'Metrô'},
      { id: 31, nome: 'Nova América/Del Castilho', geo: { lat: -22.879413, lng: -43.271650},tipoModal: 'Metrô'},
      { id: 32, nome: 'Inhaúma', geo: { lat: -22.874678, lng: -43.283436},tipoModal: 'Metrô'},
      { id: 33, nome: 'Engenho da Rainha', geo: { lat: -22.867976, lng: -43.297496},tipoModal: 'Metrô'},
      { id: 34, nome: 'Thomaz Coelho', geo: { lat: -22.862549, lng: -43.306779},tipoModal: 'Metrô'},
      { id: 35, nome: 'Vicente de Carvalho', geo: { lat: -22.853923, lng: -43.313299},tipoModal: 'Metrô'},
      { id: 36, nome: 'Irajá', geo: { lat: -22.847844, lng: -43.323918},tipoModal: 'Metrô'},
      { id: 37, nome: 'Colégio', geo: { lat: -22.842730, lng: -43.334800},tipoModal: 'Metrô'},
      { id: 38, nome: 'Coelho Neto', geo: { lat: -22.831680, lng: -43.343284},tipoModal: 'Metrô'},
      { id: 39, nome: 'Acari Fazenda Botafogo', geo: { lat: -22.824696, lng: -43.349727},tipoModal: 'Metrô'},
      { id: 40, nome: 'Engenherio Rubens Paiva', geo: { lat: -22.816399, lng: -43.358407},tipoModal: 'Metrô'},
      { id: 41, nome: 'Pavuna', geo: { lat: -22.806495, lng: -43.365260},tipoModal: 'Metrô'},
      { id: 1, nome: 'Praia Formosa', geo: { lat: -22.903034, lng: -43.208290},tipoModal: 'VLT'},
      { id: 2, nome: 'Rodoviária', geo: { lat: -22.898997, lng: -43.207287},tipoModal: 'VLT'},
      { id: 3, nome: 'Equador', geo: { lat: -22.897999, lng: -43.204894},tipoModal: 'VLT'},
      { id: 4, nome: 'Pereira Reis', geo: { lat: -22.896684, lng: -43.201729},tipoModal: 'VLT'},
      { id: 5, nome: 'Vila Olímpica', geo: { lat: -22.899441, lng: -43.200259},tipoModal: 'VLT'},
      { id: 6, nome: 'Central', geo: { lat: -22.902738, lng: -43.192082},tipoModal: 'VLT'},
      { id: 7, nome: 'Saara', geo: { lat: -22.905840, lng: -43.187432},tipoModal: 'VLT'},
      { id: 8, nome: 'Tiradentes', geo: { lat: -22.906566, lng: -43.183052},tipoModal: 'VLT'},
      { id: 9, nome: 'Colombo', geo: { lat: -22.905211, lng: -43.178116},tipoModal: 'VLT'},
      { id: 10, nome: 'Praça XV', geo: { lat: -22.902194, lng: -43.173130},tipoModal: 'VLT'},
      { id: 11, nome: 'Gamboa', geo: { lat: -22.897959, lng: -43.199519},tipoModal: 'VLT'},
      { id: 12, nome: 'Santo Cristo', geo: { lat: -22.895399, lng: -43.200195},tipoModal: 'VLT'},
      { id: 13, nome: 'Cordeiro da Graça', geo: { lat: -22.897089, lng: -43.204304},tipoModal: 'VLT'},
      { id: 14, nome: 'Providência', geo: { lat: -22.897712, lng: -43.196965},tipoModal: 'VLT'},
      { id: 15, nome: 'Harmonia', geo: { lat: -22.895597, lng: -43.191183},tipoModal: 'VLT'},
      { id: 16, nome: 'Parada dos Navios', geo: { lat: -22.894243, lng: -43.187235},tipoModal: 'VLT'},
      { id: 17, nome: 'Parada dos Museus', geo: { lat: -22.896062, lng: -43.181999},tipoModal: 'VLT'},
      { id: 18, nome: 'São Bento', geo: { lat: -22.899057, lng: -43.179853},tipoModal: 'VLT'},
      { id: 19, nome: 'Candelária', geo: { lat: -22.901785, lng: -43.178930},tipoModal: 'VLT'},
      { id: 20, nome: 'Sete de Setembro', geo: { lat: -22.905317, lng: -43.177585},tipoModal: 'VLT'},
      { id: 21, nome: 'Carioca', geo: { lat: -22.908258, lng: -43.176446},tipoModal: 'VLT'},
      { id: 22, nome: 'Cinelândia', geo: { lat: -22.910887, lng: -43.175459},tipoModal: 'VLT'},
      { id: 23, nome: 'Antônio Carlos', geo: { lat: -22.911366, lng: -43.172205},tipoModal: 'VLT'},
      { id: 24, nome: 'Santos Dumont', geo: { lat: -22.912418, lng: -43.167618},tipoModal: 'VLT'},
      { id: 25, nome: 'Utopia AquaRio', geo: { lat: -22.893067, lng: -43.190110},tipoModal: 'VLT'},
      { id: 26, nome: 'Cidade do Samba', geo: { lat: -22.894579, lng: -43.198038},tipoModal: 'VLT'}      
    ];
  }


  getEstacoes() {
    return this.estacoes;
  }

}
