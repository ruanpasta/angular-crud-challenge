# DrugovichChallenge

Esse projeto foi desenvolvido para atender ao desafio da Drugovich.
Nao foi utilizado nenhuma biblioteca de componentes. Todos os componentes foram criados aqui.

#### Estrutura do projeto:
```bash
| App             Arquivos da aplicacao
| - Components         Componentes de negocio ou do design system
| - Core               Entidaes e tipagens
| - Features           Tela/Listagem/Fomulario
| - Services           Servico da applicacao
| - Shared             Compartilhamento de componentes comuns
| - Store              Gerenciamento de estado global dos Clientes
| Assets          Logo da aplicacao
| Styles          Estilos globais e variaveis
```

[Angular CLI](https://github.com/angular/angular-cli) version 16.1.5.

## Rodando o projeto

Instale as dependencias com um gerenciador de pacotes de sua preferencia:
```bash
npm install
pnpm install
yarn
```

Use o comando `ng serve` para rodar o ambiente de desenvolvimento.
Ou se preferir pode usar um dos comandos pre-configurados:
```bash
npm start
pnpm start
yarn start
```

Apos startar o projeto, acesse `http://localhost:4200/` para ver a aplicacao rodando.

## Rodando os Testes

Foram realizados diversos testes unitarios no projeto.

Use o comando `ng test` para rodar os testes.
Ou use um dos comandos pre-configurados:
```bash
npm test
pnpm test
yarn test
```

## Build

Gere uma nova versao do projeto para producao com `ng build`. Voce pode acessar a pasta `dist/` para ver a versao final.
