export interface Usuario {
    id: number;
    nome: string;
    senha: string;
    email_instucional: string;
    tipo_usuario: string;
    data_criacao: Date;
    data_alteracao: Date;
    status_usuario: string;
  }