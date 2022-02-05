/// <reference types="Cypress"/>

it('displays create-react-app\'s default text', () => {
  cy.visit('/');
  cy.get('.App-header p')
      .should('contain', 'Edit src/App.tsx and save to reload.');
});