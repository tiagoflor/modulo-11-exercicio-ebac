// versões mais atuais do cypress pelo que andei lendo não precisam mais do <reference types ="cypress" />


describe('Acesso tela de login', () => {
    beforeEach(() => {
      cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    afterEach(() => {
      cy.screenshot() //evidenciar cada cenário concluído
    });

    // Fluxo Principal
    it('Login na plataforma loja EBAC com Sucesso', () => {
      cy.get('#username').type('aluno_ebac@teste.com')
      cy.get('#password').type('teste@teste.com')
      cy.get('.woocommerce-form > .button').click()

      cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, teste_aluno20 (não é teste_aluno20? Sair)')
      cy.get('.woocommerce-MyAccount-navigation-link--customer-logout > a').click()
    });
    
    //Fluxo Alternativo
    it('Login na plataforma loja EBAC senha Errada', () => {
      cy.get('#username').type('aluno_ebac@teste.com')
      cy.get('#password').type('teste@teste.')
      cy.get('.woocommerce-form > .button').click()

      cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
    });
    it('Login na plataforma loja EBAC email inválido', () => {
      cy.get('#username').type('aluno_ebac@test.com')
      cy.get('#password').type('teste@teste.com')
      cy.get('.woocommerce-form > .button').click()

      cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    });

    it('Como usuário, caso não lembre a senha trocar eu quero troca-la ', () => {
      cy.get('#username').type('aluno_ebac@teste.com')
      cy.get('#password').type('teste@teste.')
      cy.get('.woocommerce-form > .button').click()

      cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
      cy.get('.lost_password > a').click()

      cy.get('.woocommerce-ResetPassword > :nth-child(1)').should('contain', 'Perdeu sua senha? Digite seu nome de usuário ou endereço de e-mail. Você receberá um link por e-mail para criar uma nova senha.')
    });
  })