describe('Google Page Title Test', () => {
    it('should check the title of the page', () => {
      // Determine environment from Cypress environment variables
      const url = Cypress.env('url') || Cypress.config('baseUrl');
      
      // Visit the specified URL
      cy.visit(url);
      
      // Assert that the title contains "Google"
      cy.title().should('include', 'Google');
    });
  });