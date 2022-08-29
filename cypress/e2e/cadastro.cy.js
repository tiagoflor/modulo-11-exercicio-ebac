

describe('Acesso tela de login', () => {
    beforeEach(() => {
      cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    afterEach(() => {
      cy.screenshot() //evidenciar cada cenário concluído
    });

    it('Criar Cadastro com Email e Senha', () => {
        
    });


}