import { Rota } from './rota';
export interface Linha {
    id: number,
    nome: string,
    rotas: Rota[],
    idModal: number
}