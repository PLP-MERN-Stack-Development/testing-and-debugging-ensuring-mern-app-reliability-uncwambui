describe('Navigation', () => {
  it('navigates to About page', () => {
    cy.visit('http://localhost:5173/');
    cy.contains('About').click();
    cy.url().should('include', '/about');
    cy.contains('About Page').should('be.visible');
  });
});
