# Automacao E2E - Cadastro e Login (Cypress)

Projeto de automacao de testes End-to-End (E2E) desenvolvido para validar o fluxo de cadastro e autenticacao de usuarios em aplicacao web.

## Tecnologias Utilizadas

* Cypress: Framework de testes automatizados E2E.
* JavaScript: Linguagem de programacao dos testes.
* Faker.js (@faker-js/faker): Geracao de massa de dados dinamicos.

## Arquitetura e Boas Praticas

* Custom Commands (`commands.js`): Abstracao e reutilizacao de acoes repetitivas (preenchimento de cadastro e login).
* Massa de Dados Dinamica: Utilizacao de dados aleatorios para garantir independencia nos testes e evitar falhas por duplicidade de cadastro.
* Assercoes (Assertions): Validacao de login com sucesso através da verificacao do elemento da interface contendo o nome do usuario.

## Cenarios Cobertos

* Fluxo completo de navegacao ate a tela de registro.
* Cadastro de novo usuario utilizando dados gerados em tempo de execucao.
* Autenticacao com as credenciais recem-criadas.
* Validacao do estado logado na aplicacao.

## Como Executar o Projeto

1. Clone o repositorio:
   git clone https://github.com/Pesseguini/hub-de-leitura-teste-ui-task.git

2. Instale as dependencias:
   npm install

3. Execute os testes no modo interativo do Cypress:
   npx cypress open

4. Execute os testes no modo headless (terminal):
   npx cypress run