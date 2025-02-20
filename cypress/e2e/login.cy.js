describe('Login tests', () => {
    it('Verify ', () => {
      cy.visit('https://the-internet.herokuapp.com/login');
      cy.get('h2').should('contain', 'Login Page');
    });
    it('Open login and try to login using correct credentials', () => {
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('#username').type("tomsmith");
        cy.get('#password').type("SuperSecretPassword!");
        cy.get('.radius').click();
        cy.location('pathname').should('eq', '/secure');
      });
      it('Open login and try to login using wrong password', () => {
        const randomString = Math.random().toString(36).substring(2, 10);
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('#username').type("tomsmith");
        cy.get('#password').type(randomString);
        cy.get('.radius').click();
        cy.contains('Your password is invalid!')
      });
  });
  