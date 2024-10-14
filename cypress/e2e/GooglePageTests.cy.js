const jsonData = require('../fixtures/GoogleTestData.json');
const selectors = {

  googleLogo    : "[class='lnXdpd']",
  searchBar     : "[aria-label='Search']"

};

describe('Google Page Title Test', () => {

  jsonData.forEach(testData => {
    
    it('it should get the title fo the page', () => {
      
      cy.visit(testData.baseUrl);
      cy.title().should('include', 'Google');

      });

    });



  });