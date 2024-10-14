const jsonData = require('../fixtures/data.json');
const selectors = {

  googleLogo    : "[class='lnXdpd']",
  searchBar     : "[aria-label='Search']"

};

describe('Google Page Title Test', () => {

  jsonData.forEach(testData => {
    
    it('it should get the title fo the page', () => {
      
      cy.visit(testData.baseUrl);
      cy.title().should('include', 'Google');
      cy.get(selectors.googleLogo).should('be.visible')
      cy.get(selectors.searchBar).should('be.visible')

      });

    });



  });