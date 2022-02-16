/// <reference types="Cypress"/>

it('displays hello world', () => {
  cy.visit('/');
  cy.get('h1')
      .should('contain', 'Hello World!');
});