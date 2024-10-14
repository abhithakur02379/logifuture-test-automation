
describe('Google Page Title Test', () => {

    
    it('it should get the title fo the page', () => {
      
      cy.clearAllCookies()
      cy.clearAllLocalStorage()
      cy.visit(Cypress.env('baseUrl'));
      cy.title().should('include', 'Google');

      });

  });