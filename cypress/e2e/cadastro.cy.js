const { faker } = require('@faker-js/faker')

describe('Criar Cadastro com Email e Senha', () => {
    
    const  nomeFaker = faker.name.firstName() // nome fake randomico
    const  sobreNomeFaker = faker.name.lastName() // sobrenome fake randomico
    const emailFaker = faker.internet.email(nomeFaker); // email fake randomico e passando parametro do nome

    beforeEach(() => {
      cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
   afterEach(() => {
     cy.screenshot() //evidenciar cada cenário concluído
    });

    // Fluxo Principal (caminho Feliz)

    it('Completar o pré cadastro com sucesso', () => {
      cy.get('#reg_email').type(emailFaker)
      cy.get('#reg_password').type('!teste@teste2')
      cy.get(':nth-child(4) > .button').click()
      
      cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
      cy.get('#account_first_name').type(nomeFaker) 
      cy.get('#account_last_name').type(sobreNomeFaker) 
      cy.get('.woocommerce-Button').click()

      cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });

    //Fluxo Alternativo
    it('Utilizando e-mail existente', () => {
      cy.get('#reg_email').type('Jaylan_Pfeffer@gmail.com')
      cy.get('#reg_password').type('senha@2022')
      cy.get(':nth-child(4) > .button').click()

      cy.get('.woocommerce-error').should('contain', 'Erro: Uma conta já está registrada com seu endereço de e-mail. Faça login.')

    });



})