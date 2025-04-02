import { Aluno } from "./Aluno";
import { Candidato } from "./Candidato";

export interface Projeto {
    id_projeto: number;
    titulo: string;
    descricao: string;
    data_alteracao: Date;
    data_criacao: Date;
    alunos?: Aluno[];
    candidatos?: Candidato[];
}