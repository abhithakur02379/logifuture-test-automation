const jsonData = require('../fixtures/data.json');

describe('Google Page Title Test', () => {

  jsonData.forEach(testData => {
    
    it('it should get the title fo the page', () => {
      
      cy.visit(testData.baseUrl);
      cy.title().should('include', 'Google');

    });

  });



  });