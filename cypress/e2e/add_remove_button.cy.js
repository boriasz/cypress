describe('Add and remove button tests', () => {
  beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/add_remove_elements/');
    });
  it('Verify page title', () => {
      cy.get('h3').should('contain', 'Add/Remove Elements');
    });
    it('Verify if Add Element button exists', () => {
      cy.get('button').should('have.length', 1);
      cy.get('.example').should('contain', 'Add Element');
    });
    it('Verify if new element is added', () => {
      cy.contains('button', 'Add Element').click();
      cy.get('button').should('have.length', 2);
    });
    it('Verify if new element is added', () => {
      cy.contains('button', 'Add Element').click();
      cy.get('button').should('have.length', 2);
    });
    it('Verify if new element is removed', () => {
      cy.contains('button', 'Add Element').click();
      cy.get('button').should('have.length', 2);
      cy.contains('button', 'Delete').click();
      cy.get('button').should('have.length', 1);
    });
    it('Add multiple elements and remove all', () => {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      for(let i=0; i < randomNumber; i++){
        cy.contains('button', 'Add Element').click();
      }
      cy.get('.added-manually').should('have.length', randomNumber);
      cy.get('.added-manually').each(($el) => {
        cy.wrap($el).click();
      });
      cy.get('.added-manually').should('not.exist');
    });
  });
  