import { Aluno } from "./Aluno";
import { Evento } from "./Evento";

export interface Representante {
    id_representante: number;
    aluno?: Aluno;
    evento?: Evento;
    representante_situacao: string;
    qrcode: string;
  }
  