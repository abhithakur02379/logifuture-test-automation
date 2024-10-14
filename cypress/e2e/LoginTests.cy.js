const selectors = {

    email                           : "[id='user[email]']",
    password                        : "[id='user[password]']",
    signInButton                    : "[class='button button-primary g-recaptcha']",
    signinSuccessfullMessage        : "[data-message='Signed in successfully.']",
    formSearch                      : "[class='form__search']",
    userDropdown                    : "[class='dropdown__toggle-button']",
    signOutButton                   : "[href='/users/sign_out']",
    signinNOTSuccessfullMessage     : "[class='form-error__list-item']",
    emailError                      : "[id='user[email]-error']",
    passwordError                   : "[id='user[password]-error']",
    forgotPasswordLink              : "[class='form__forgot-password']",
    passwordResetHeading            : "[class='password-reset__heading']",
    submitButton                    : "[type='submit']",
    passwordResetText               : "[class='password-reset__sent']>h2",
    createNewAccountLink            : "[class='sign-in__sign-up'] > a",

  
  
  };
  
  
  describe('Login Functionality Tests', () => {
  
    const baseUrl = 'https://courses.ultimateqa.com/';
  
    beforeEach(() => {
      cy.visit(`${baseUrl}/users/sign_in`);
    });
  
  
    it('Sign in successfully with valid credentials', () => {
    
      cy.get(selectors.email, { timeout: 2000 }).should('be.visible').type("abhithakur02379@gmail.com")
      cy.get(selectors.password, { timeout: 2000 }).should('be.visible').type("Test@1234")
      cy.get(selectors.signInButton, { timeout: 2000 }).should('be.visible').click()
      cy.url().should('include', '/collections');
      cy.get(selectors.signinSuccessfullMessage, { timeout: 2000 }).should('be.visible')
      cy.get(selectors.formSearch, { timeout: 2000 }).should('be.visible')
      cy.get(selectors.userDropdown, { timeout: 2000 }).should('be.visible').click()
      cy.get(selectors.signOutButton, { timeout: 2000 }).should('be.visible')
  
    });
  
    it('Display an error message for invalid credentials', () => {
  
      cy.get(selectors.email, { timeout: 2000 }).should('be.visible').type("abhithakur02379@gmail.com")
      cy.get(selectors.password, { timeout: 2000 }).should('be.visible').type("Password")
      cy.get(selectors.signInButton, { timeout: 2000 }).should('be.visible').click()
      cy.get(selectors.signinNOTSuccessfullMessage, { timeout: 2000 }).should('be.visible').contains('Invalid email or password.')
  
    });
  
    it('Display an error message when Email is not provided', () => {
  
      cy.get(selectors.email, { timeout: 2000 }).should('be.visible').type(" ")
      cy.get(selectors.password, { timeout: 2000 }).should('be.visible').type("Password")
      cy.get(selectors.signInButton, { timeout: 2000 }).should('be.visible').click()
      cy.get(selectors.emailError, { timeout: 2000 }).should('be.visible').contains('Please enter a valid email address')
  
    });
  
    it('Display an error message when Email format is not correct', () => {
  
      cy.get(selectors.email, { timeout: 2000 }).should('be.visible').type("abhithakur02379")
      cy.get(selectors.password, { timeout: 2000 }).should('be.visible').type("Password")
      cy.get(selectors.signInButton, { timeout: 2000 }).should('be.visible').click()
      cy.get(selectors.emailError, { timeout: 2000 }).should('be.visible').contains('Please enter a valid email address')
  
    });
  
    it('Display an error message when Password is not provided', () => {
  
      cy.get(selectors.email, { timeout: 2000 }).should('be.visible').type("abhithakur02379@gmail.com")
      cy.get(selectors.password, { timeout: 2000 }).should('be.visible').clear()
      cy.get(selectors.signInButton, { timeout: 2000 }).should('be.visible').click()
      cy.get(selectors.passwordError, { timeout: 2000 }).should('be.visible').contains('This field cannot be blank')
  
    });
  
    it('Validte Forgot Password link is working', () => {
  
      cy.get(selectors.forgotPasswordLink, { timeout: 2000 }).should('be.visible').click()
      cy.get(selectors.passwordResetHeading, { timeout: 2000 }).should('be.visible').contains('Forgot your Password?')
      cy.get(selectors.email, { timeout: 2000 }).should('be.visible').type("abhithakur02379@gmail.com")
      cy.get(selectors.submitButton, { timeout: 2000 }).should('be.visible').click()
      cy.get(selectors.passwordResetText, { timeout: 2000 }).should('be.visible').contains('Help is on the way!')
  
    });

  
  
  });
  