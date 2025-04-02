import { Usuario } from "./Usuario";
import { Projeto } from "./Projeto";

export interface Aluno {
    id: number;
    usuario?: Usuario;
    projeto?: Projeto;
    foto_url: string;
    data_criacao: Date;
    data_alteracao: Date;
    data_ingresso: Date;
    curso_semestre: string;
  }

    