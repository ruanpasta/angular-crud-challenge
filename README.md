# Angular Crud Challenge

Esse projeto foi desenvolvido para atender a um desafio durante um 1 dia.\
Nao foi utilizado nenhuma biblioteca de componentes.Todos os componentes foram criados aqui.

Nesse projeto temos um CRUD. Listamos os clientes buscando de uma API externa. Podemos criar um novo cliente, editar e remover os existentes.

As principais technologias utilizadas nesse projeto foram:\
<img src="https://img.shields.io/badge/Angular-%23cf173f?logo=Angular"/>
<img src="https://img.shields.io/badge/NgRx-%23d36be8?logo=ngrx"/>
<img src="https://img.shields.io/badge/Jasmine-%23801296?logo=jasmine"/>
<img src="https://img.shields.io/badge/Karma-%23199612"/>
<img src="https://img.shields.io/badge/Sass-edc5e1?logo=sass&logoColor=b04d91"/>

**Acesse o porjeto em producao:**\
https://angular-crud-challenge.ruanpasta.com/

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
