import { Aluno } from "./Aluno";
import { Evento } from "./Evento";
import { Projeto } from "./Projeto";

export interface Candidato {
    id: number;
    aluno?: Aluno;
    projeto?: Projeto;
    evento?: Evento;
    situacao_candidato: string;
    qrcode: string;
  }
  