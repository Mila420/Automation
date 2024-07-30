describe('Google Search Automation Test', () => {
    it('Search for "automation" and check Wikipedia', () => {
      cy.visit('https://www.google.com');
      cy.get("textarea[name='q']").should('be.visible').type('automation{enter}');
  
      cy.contains('Wikipedia', { timeout: 20000 }).should('be.visible').click();
  
      cy.origin('https://en.wikipedia.org', () => {
        cy.visit('/wiki/Automation#History', { timeout: 20000 });
        cy.contains('invented in 1624').scrollIntoView().should('be.visible');
        cy.screenshot('Wikipedia_Page_Complete');
      });
    });
  });
  