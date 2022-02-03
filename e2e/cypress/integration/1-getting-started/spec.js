/// <reference types="Cypress"/>

it('displays hello world', () => {
  cy.visit('/');
  cy.get('.App-header p')
      .should('contain', 'Edit src/App.tsx and save to reload.');
});