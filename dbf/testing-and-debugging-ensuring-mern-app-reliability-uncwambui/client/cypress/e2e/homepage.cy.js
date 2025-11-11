describe('Home Page', () => {
  it('loads the homepage', () => {
    cy.visit('http://localhost:5173/');
    cy.contains('Welcome').should('be.visible');
  });
});
