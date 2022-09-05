// versões mais atuais do cypress pelo que andei lendo não precisam mais do <reference types ="cypress" />

describe('Efetuar Compra de produtos na loja', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
      });

      it('Acessar página de produtos escolhendo um item para compra', () => {
        var quantidade = 2
        cy.get(':nth-child(2) > .page-numbers').click()
        cy.get('[class="product-block grid"]')
            .contains('Autumn Pullie').click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Green').click()

        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

      });

      it('Produto em falta', () => {
        var quantidade = 5
        cy.get('[class="product-block grid"]')
            .contains('Ariel Roll Sleeve Sweatshirt').click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Purple').click()

        cy.get('class=["stock out-of-stock"]').contains('Fora de Estoque')

        //cy.get('[class="product-block grid"]')
        //.contains('Ajax Full-Zip Sweatshirt').click()
      

       
      });


});