describe('Search Animation', () => {
    it('should display search results when searching', () => {
      cy.visit('http://localhost:3000');
      cy.get('input[type="search"]').type('Hello');
      cy.get('.search-results').should('be.visible');
    });
  });
  