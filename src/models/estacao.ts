import { Localizacao } from "./localizacao";

export interface Estacao {
    id: number,
    nome: string,
    geo: Localizacao,
    tipoModal: string
}