beforeEach(() => {

  cy.visit('https://front.serverest.dev/login')
  cy.get('[data-testid="email"]').type('henriquewn@gmail.com')
  cy.get('[data-testid="senha"]').type('12345')
  cy.get('[data-testid="entrar"]').click()
  cy.get('h1').contains('Bem Vindo Henrique Nogueira')

})


describe('feature de produtos spec', () => {

  it('fluxo 1 crud de produtos', () => {
    cy.get('[data-testid="cadastrar-produtos"]').click()
    cy.get('[data-testid="nome"]').type('celular')
    cy.get('[data-testid="preco"]').type('2000')
    cy.get('[data-testid="descricao"]').type('Cadê meu celular?')
    cy.get('[data-testid="quantity"]').type('10')
    cy.get('[data-testid="cadastarProdutos"]').click()
    cy.get('h1').contains('Lista dos Produtos')
    cy.get('tbody').should('be.visible')
    cy.get('tr').each(($row) => {
      if ($row.find('td').eq(0).text() === 'celular') {
        $row.find('td').eq(5).children('div').children('.btn-danger').click()}
    })
    cy.get('td').should('not.include.text', 'celular')
  })


  it('fluxo 2 crud de produtos', () => {
    
    cy.get('[data-testid="cadastrar-produtos"]').click()
    cy.get('[data-testid="nome"]').type('tablet')
    cy.get('[data-testid="preco"]').type('3000')
    cy.get('[data-testid="descricao"]').type('Produto importado')
    cy.get('[data-testid="quantity"]').type('50')
    cy.get('[data-testid="cadastarProdutos"]').click()
    cy.get('h1').contains('Lista dos Produtos')
    cy.get('tbody').should('be.visible')
    cy.get('tr').each(($row) => {
      if ($row.find('td').eq(0).text() === 'tablet') {
        $row.find('td').eq(5).children('div').children('.btn-danger').click()}
    })
    cy.get('td').should('not.include.text', 'tablet')

  })

})