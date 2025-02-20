describe('Login tests', () => {
    it('Verify', () => {
      cy.visit('https://the-internet.herokuapp.com/login');
      cy.get('h2').should('contain', 'Login Page');
    });
    it('Open login and try to login using wrong password', () => {
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('#username').type("tomsmith");
        cy.get('#password').type("SuperSecretPassword!");
        cy.get('.radius').click();
        cy.location('pathname').should('eq', '/secure');
      });
  });
  