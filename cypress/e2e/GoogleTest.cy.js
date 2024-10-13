describe('Google Page Title Test', () => {
  
    it('should check the title of the page', () => {

      const url = Cypress.env('url') || Cypress.config('baseUrl');

      cy.visit(url);

      cy.title().should('include', 'Google');
    });
  });