describe('login functionality', () => {
    it('should have the correct URL', () => {
        cy.visit('https://www.facebook.com/');
        cy.url().should('eq', 'https://www.facebook.com/');
    });
    it('User should able to login into the website with valid credentials', () => {
      cy.visit("https://www.facebook.com")  
      cy.get('input[type="email"]').type(Cypress.env('email'));
      cy.get('input[type="password"]').type(Cypress.env('password'));
      cy.get('#loginbutton').contains('Log In').click();
    })
    it('User shouldnot able to login into the website with invalid credentials',()=>{
      cy.visit("https://www.facebook.com")  
      cy.get('input[type="email"]').type("deepsana@yahoo.com");
      cy.get('input[type="password"]').type("example");
      cy.get('#loginbutton').contains('Log In').click();
      cy.get('._9ay7').should('have.text', 'Invalid email or password.');
      cy.wait(2000); 
     })
     it('should show appropriate validation messages for empty fields', () => {
        // Click on the login button without entering credentials
        cy.get('#loginbutton').click();
        cy.get('#email-error').should('contain', 'Required field');
        cy.get('#pass-error').should('contain', 'Required field');
      });
  })