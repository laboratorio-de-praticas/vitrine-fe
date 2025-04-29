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

## Responsividade para Escala 100%

Se tornou necessária o ajuste para um melhor escalonamento. Garantir que a aplicação mantenha uma experiência consistente e funcional em diferentes dispositivos com escalas de zoom em 100%.

### Testes em Diferentes Níveis de Zoom

Verificação com

100% (padrão e selecionada)

125% e 150% (comum em acessibilidade)

200% (casos extremos para validação)

### Acessibilidade em Textos

Garantir que textos não quebrem layout em zoom alto.

### Impacto Esperado
Melhoria na experiência de usuários que utilizam zoom por necessidade visual.

Layout mais consistente em diferentes dispositivos e configurações de tela.

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


## Diagramação - Vitrine 

```mermaid
flowchart TD
    A(["Vitrine Front-end"]) --> B{{Acessar eventos internos ou externos}}
    B --> C["/vitrine/tv"]
    B --> D["/vitrine/externo"]
    C --> N1{{Possui token de segurança?}}
    D --> N1
    N1 --> N2["Não"]
    N1 --> N3["Sim"]
    N2 --> N4["Redireciona para o /login"]
    N3 --> N5["Realiza a chamada para o backend"]
    N6(["Requisição Back-end"]) --> N9["JWT"]
    N9 --> N10["API DE SEGURANÇA E AUTENTIFICAÇÃO"]
    N10 --> N11["Administrador"]
    N10 --> N12["Usuário não identificado ou não é Administrador"]
    N11 --> N7(["v1/vitrine/tv"])
    N11 --> N8(["v1/vitrine/eventos-externo"])
    N7 --> N13[/"Banco de Dados"/]
    N8 --> N13
    N15["CMS"] --> N14[/"Banco de dados"/]
    N14 --> N16["Dados de Eventos Internos"]
    N14 --> N18["Dados de Eventos Externos"]
    N16 --> N17(["v1/vitrine/tv"])
    N18 --> N19(["v1/vitrine/eventos-externos"])
    N17 --> N20["Realiza filtros para apenas eventos com 2 ou mais participantes"]
    N19 --> N21["Filtro: eventos ativos primeiro"]
    N20 --> N22["Devolve a resposta ao front-end"]
    N21 --> N22
```
