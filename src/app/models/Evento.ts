import { Representante } from "./Representante";

export interface Evento {
    id_evento: number;
    nome_evento: string;
    tipo_evento: string;
    descricao_evento: string;
    status_evento: string;
    curso_semestre: string;
    data_alteracao: Date;
    data_criacao: Date;
    data_inicio: Date;
    data_fim: Date;
    representantes?: Representante[];
  }