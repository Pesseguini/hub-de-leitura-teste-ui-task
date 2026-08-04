import { faker } from '@faker-js/faker'
describe('Testes End To End do fluxo de cadastro e login', () => {


    beforeEach(() => {
        cy.visit('/index.html')
    });


    it('Deve fazer o cadastro e validar o login com o usuário cadastrado', () => {
        let nome = faker.person.fullName();
        let email = faker.internet.email();
        let senha = faker.internet.password();
        let telefone = faker.phone.number('##########');
        cy.get('#account-link').click()
        cy.get('[href="/register.html"]').click()
        cy.cadastrar(nome, email, telefone, senha, senha)
        cy.login(email,senha)
        cy.get('#user-name').should('contain', nome)



    });
});