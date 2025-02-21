describe('Login tests', () => {
    it('Verify login page', () => {
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
      it('Open login and try to login using wrong username', () => {
        const randomString = Math.random().toString(36).substring(2, 10);
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('#username').type(randomString);
        cy.get('#password').type("SuperSecretPassword!");
        cy.get('.radius').click();
        cy.contains('Your username is invalid!')
      });
      it('Open login and try to login using empty username', () => {
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('#password').type("SuperSecretPassword!");
        cy.get('.radius').click();
        cy.contains('Your username is invalid!')
      });
      it('Open login and try to login using empty passwrd', () => {
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('#username').type("tomsmith");
        cy.get('.radius').click();
        cy.contains('Your password is invalid!')
      });
      it('Open login, try to login using correct credentials and logout', () => {
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('#username').type("tomsmith");
        cy.get('#password').type("SuperSecretPassword!");
        cy.get('.radius').click();
        cy.location('pathname').should('eq', '/secure');
        cy.get('.button.secondary.radius').click();
        cy.location('pathname').should('eq', '/login');
      });
  });
  