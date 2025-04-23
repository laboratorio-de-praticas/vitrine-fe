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

- Listagem de projetos/candidatos

- Submissão de votos

- Verificação de status de votação

- Resultados parciais (quando disponíveis)

### 2. Módulo de Segurança
Implementações:

- Autenticação JWT para acesso a endpoints protegidos

- Criptografia de votos no client-side antes do envio

- Validação de sessão do eleitor

- Proteção contra CSRF (Cross-Site Request Forgery)

Bibliotecas utilizadas:

- jsencrypt para criptografia assimétrica

- crypto-js para operações de hash

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

# Outras variáveis conforme necessário


4. Executar o projeto

npm run dev  # Modo desenvolvimento
# ou
npm start    # Modo produção (após build)
```

## Estrutura do Projeto (Principais Diretórios)
```
vitrine-fe/
├── components/      # Componentes reutilizáveis
├── pages/           # Rotas da aplicação
│   ├── api/         # API routes (Next.js)
│   ├── votacao/     # Páginas relacionadas a votação
│   └── resultados/  # Visualização de resultados
├── lib/             # Lógica compartilhada
│   ├── security.js  # Funções de segurança
│   └── voting.js    # Lógica de votação
├── public/          # Assets estáticos
└── styles/          # Estilos globais
```

## Fluxo de Votação Segura
- Usuário acessa a plataforma

- Sistema verifica sessão/cookie válido

- Dados dos candidatos são carregados com assinatura digital

- Voto é criptografado no client-side antes do envio

- Backend valida e processa o voto

- Confirmação é retornada ao frontend

## Considerações de Segurança
- Todos os votos são criptografados antes da transmissão

- Uso de HTTPS obrigatório em produção

- Validação de entrada em todos os campos

- Logs de auditoria para ações sensíveis

- Política de CORS restritiva

## Licença
MIT License

Copyright (c) 2025 Projeto Vitrine

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.