describe('Homepage tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('displays the correct hero section content', () => {
    // Check for the hero section's main content
    cy.get('.foreground-content img[alt="Lion Statue Image"]').should('be.visible')
    cy.get('h1.jumbotron').contains('Hall 3.')
    cy.get('.foreground-content p').contains('Nanyang Technological University, Singapore')
  })
})