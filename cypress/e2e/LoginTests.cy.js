  
  describe('Login Functionality Tests', () => {
  
    beforeEach(() => {

      cy.visit(Cypress.env('baseUrl')+ '/users/sign_in');

    });
  
    // Test Case 1
    it('Sign in successfully with valid credentials', () => {
    
      
      cy.get(Cypress.env('email'), { timeout: 2000 }).should('be.visible').type("abhithakur02379@gmail.com")
      cy.get(Cypress.env('password'), { timeout: 2000 }).should('be.visible').type("Test@1234")
      cy.get(Cypress.env('signInButton'), { timeout: 2000 }).should('be.visible').click()
      cy.url().should('include', '/collections');
      cy.get(Cypress.env('signinSuccessfullMessage'), { timeout: 2000 }).should('be.visible')
      cy.get(Cypress.env('formSearch'), { timeout: 2000 }).should('be.visible')
      cy.get(Cypress.env('userDropdown'), { timeout: 2000 }).should('be.visible').click()
      cy.get(Cypress.env('signOutButton'), { timeout: 2000 }).should('be.visible')
  
    });
  
    // Test Case 2
    it('Display an error message for invalid password', () => {
  
      cy.get(Cypress.env('email'), { timeout: 2000 }).should('be.visible').type("abhithakur02379@gmail.com")
      cy.get(Cypress.env('password'), { timeout: 2000 }).should('be.visible').type("Test@12345")
      cy.get(Cypress.env('signInButton'), { timeout: 2000 }).should('be.visible').click()
      cy.get(Cypress.env('signinNOTSuccessfullMessage'), { timeout: 2000 }).should('be.visible').contains('Invalid email or password.')
  
    });
  
    // Test Case 3
    it('Display an error message when Email is not provided', () => {
  
      cy.get(Cypress.env('email'), { timeout: 2000 }).should('be.visible').type(" ")
      cy.get(Cypress.env('password'), { timeout: 2000 }).should('be.visible').type("Test@1234")
      cy.get(Cypress.env('signInButton'), { timeout: 2000 }).should('be.visible').click()
      cy.get(Cypress.env('emailError'), { timeout: 2000 }).should('be.visible').contains('Please enter a valid email address')
  
    });
  
    // Test Case 4
    it('Display an error message when Email format is not correct', () => {
  
      cy.get(Cypress.env('email'), { timeout: 2000 }).should('be.visible').type("abhithakur02379")
      cy.get(Cypress.env('password'), { timeout: 2000 }).should('be.visible').type("Test@1234")
      cy.get(Cypress.env('signInButton'), { timeout: 2000 }).should('be.visible').click()
      cy.get(Cypress.env('emailError'), { timeout: 2000 }).should('be.visible').contains('Please enter a valid email address')
  
    });
  
    // Test Case 5
    it('Display an error message when Password is not provided', () => {
  
      cy.get(Cypress.env('email'), { timeout: 2000 }).should('be.visible').type("abhithakur02379@gmail.com")
      cy.get(Cypress.env('password'), { timeout: 2000 }).should('be.visible').clear()
      cy.get(Cypress.env('signInButton'), { timeout: 2000 }).should('be.visible').click()
      cy.get(Cypress.env('passwordError'), { timeout: 2000 }).should('be.visible').contains('This field cannot be blank')
  
    });
  
    // Test Case 6
    it('Validte Forgot Password link is working', () => {
  
      cy.get(Cypress.env('forgotPasswordLink'), { timeout: 2000 }).should('be.visible').click()
      cy.get(Cypress.env('passwordResetHeading'), { timeout: 2000 }).should('be.visible').contains('Forgot your Password?')
      cy.get(Cypress.env('email'), { timeout: 2000 }).should('be.visible').type("abhithakur02379@gmail.com")
      cy.get(Cypress.env('submitButton'), { timeout: 2000 }).should('be.visible').click()
      cy.get(Cypress.env('passwordResetText'), { timeout: 2000 }).should('be.visible').contains('Help is on the way!')
  
    });

  
  
  });
  