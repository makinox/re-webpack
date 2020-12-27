/// <reference types="cypress" />

export default context('Login', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('BASE_URL'));
  });

  it('Its root', () => {
    cy.location('pathname').should('include', '/');
  });

  it('Have a welcome text', () => {
    cy.get('span').contains('Hello webpack');
  });
});
