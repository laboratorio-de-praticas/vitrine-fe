# Vitrine de Projetos - Frontend

## Visão Geral
A Vitrine de Projetos é uma interface pública desenvolvida em React/Next.js que permite a visualização e votação em representantes de classes. Este repositório contém o frontend do sistema.

## Mudança de TypeScript para JavaScript
### Motivação
O projeto foi migrado de TypeScript para JavaScript puro para:

- Simplificar a base de código para equipes menos familiarizadas com TypeScript

- Reduzir a complexidade de configuração

- Manter consistência com outros projetos da organização

- Agilizar o desenvolvimento de novas funcionalidades

## Responsividade para Escala 100%
## Impactos
- Removidas todas as definições de tipo (*.d.ts, @types)

- Eliminada a necessidade de compilação TypeScript

- Configurações simplificadas no next.config.js

- Mantida a estrutura de componentes e lógica existente

## Integrações Principais
### 1. Integração com Backend de Votação
- Endpoint configurável: NEXT_PUBLIC_VITRINE_BE=http://localhost:5001

- Principais funcionalidades integradas:

- Listagem de eventos externos/internos

- Verificação de status de eventos (eventos inativos ficam excluidos)

### 2. Módulo de Segurança
Implementações:

- Autenticação JWT para acesso a endpoints protegidos

## Requisitos do Sistema
### Dependências principais
- Node.js: Versão 14.x.x ou superior (recomendado 16.x.x/18.x.x)

- Next.js: 15.2.2+

- React: 19.0.0+

- ReactDOM: 19.0.0+

## Dependências adicionais
- Geração de QR Code (qrcode.react)

- Geração de PDF (react-to-pdf, jspdf)

- Captura de tela (html2canvas)

- Ícones (react-icons)

## Configuração e Execução
```bash
1. Clonar o repositório


git clone https://github.com/laboratorio-de-praticas/vitrine-fe.git

cd vitrine-fe


2. Instalar dependências

npm install


3. Configurar variáveis de ambiente

Crie um arquivo .env.local com:

PORT=3001

NEXT_PUBLIC_VITRINE_BE=http://localhost:5001


4. Executar o projeto

npm run dev  # Modo desenvolvimento
# ou
npm start    # Modo produção (após build)
```

## Estrutura do Projeto (Principais Diretórios)
```
vitrine-fe/
├── components/      # Componentes reutilizáveis
├── public/          # Assets estáticos
├── app/             # Páginas de Redirecionamento com Next.js
└── styles/          # Estilos globais
```