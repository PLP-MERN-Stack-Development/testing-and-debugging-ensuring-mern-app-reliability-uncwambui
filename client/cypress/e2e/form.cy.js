describe('Form', () => {
  it('submits a form successfully', () => {
    cy.visit('http://localhost:5173/contact');
    cy.get('input[name="name"]').type('Eunice');
    cy.get('input[name="email"]').type('eunice@example.com');
    cy.get('textarea[name="message"]').type('This is a test message.');
    cy.get('button[type="submit"]').click();
    cy.contains('Thank you').should('be.visible');
  });
});
