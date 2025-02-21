describe('Login tests', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/login')
    });
    it('Verify login page', () => {
      cy.get('h2').should('contain', 'Login Page');
    });
    it('Open login and try to login using correct credentials', () => {
        cy.login('tomsmith', 'SuperSecretPassword!')
        cy.location('pathname').should('eq', '/secure');
      });
      it('Open login and try to login using wrong password', () => {
        const randomString = Math.random().toString(36).substring(2, 10);
        cy.login('tomsmith', randomString)
        cy.contains('Your password is invalid!')
      });
      it('Open login and try to login using wrong username', () => {
        const randomString = Math.random().toString(36).substring(2, 10);
        cy.login(randomString, 'SuperSecretPassword!')
        cy.contains('Your username is invalid!')
      });
      it('Open login and try to login using empty username', () => {
        cy.login('{selectall}{backspace}', 'SuperSecretPassword!')
        cy.contains('Your username is invalid!')
      });
      it('Open login and try to login using empty passwrd', () => {
        cy.login('tomsmith', '{selectall}{backspace}')
        cy.contains('Your password is invalid!')
      });
      it('Open login, try to login using correct credentials and logout', () => {
        cy.login('tomsmith', 'SuperSecretPassword!')
        cy.location('pathname').should('eq', '/secure');
        cy.get('.button.secondary.radius').click();
        cy.location('pathname').should('eq', '/login');
      });
  });
  