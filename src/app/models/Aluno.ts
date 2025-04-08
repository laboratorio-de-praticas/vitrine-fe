import { Usuario } from "./Usuario"; 
import { Representante } from "./Representante";

export interface Aluno {
    id_aluno: number;
    foto_url: string;
    data_criacao: Date;
    data_alteracao: Date;
    data_matricula: Date;
    curso_semestre: string;
    usuario?: Usuario;
    representantes?: Representante[];
  }

