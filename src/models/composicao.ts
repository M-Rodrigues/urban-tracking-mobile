import { Localizacao } from "./localizacao";

export interface Composicao {
    id: number,
    codRastreador: string,
    geo: Localizacao,
    ultimaAtualizacao: Date,
    idModal: number
}