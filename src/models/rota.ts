import { Estacao } from './estacao';

export interface Rota {
    id: number,
    nome: string,
    estacoes: Estacao[],
    idLinha: number
}