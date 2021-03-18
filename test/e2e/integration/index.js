describe('Sample tests', () => {
  context('desktop', () => {
    beforeEach(() => {
      cy.viewport('macbook-15');
      cy.visit('/');
    });

    it('Visits index page', () => {
      cy.contains('.header', 'Police Trends');
      cy.get('a.v-btn.nav-item').its('length').should('eq', 5);
    });

    it('Goes to See Budget page', () => {
      cy.get('a.v-btn.nav-item').eq(0).contains('Explore Budget').click();
      cy.location('pathname').should('eq', '/explore-budget');
      cy.contains('h2', 'Explore Budget');
    });

    it('Goes to Balance Budget page', () => {
      cy.get('a.v-btn.nav-item').eq(1).contains('Balance Budget').click();
      cy.location('pathname').should('eq', '/balance-budget');
      cy.contains('h2', "Balance My City's Budget");
    });

    it('Goes to index page', () => {
      cy.get('a.v-btn.nav-item').eq(2).contains('Police Trends').click();
      cy.location('pathname').should('eq', '/');
      cy.contains('h3', 'Explaining your city’s public budget information, to empower citizens like you.');
    });

    it('Goes to About Us page', () => {
      cy.get('a.v-btn.nav-item').eq(3).contains('About Us').click();
      cy.location('pathname').should('eq', '/about');
      cy.contains('h2', 'About Us');
    });

    it('Goes to Take Action page', () => {
      cy.get('a.v-btn.nav-item').eq(4).contains('Take Action').click();
      cy.location('pathname').should('eq', '/take-action');
      cy.contains('h2', 'Take Action');
    });
  });

  context('mobile', () => {
    beforeEach(() => {
      cy.viewport('iphone-x');
      cy.visit('/');
    });

    it('Visits index page', () => {
      cy.contains('.header', 'City Budget Tracker');
      cy.get('a.nav-item').its('length').should('eq', 5);
    });

    it('Goes to index page', () => {
      cy.get('a.nav-item').eq(0).contains('City Budget Tracker').click();
      cy.location('pathname').should('eq', '/');
      cy.contains('h3', 'Explaining your city’s public budget information, to empower citizens like you.');
    });

    it('Goes to See Budget page', () => {
      cy.get('.nav-icon').click();
      cy.get('a.nav-item').eq(1).contains('See Budget').click();
      cy.location('pathname').should('eq', '/see-budget');
      cy.contains('h2', 'Explore Budget');
    });

    it('Goes to Balance Budget page', () => {
      cy.get('.nav-icon').click();
      cy.get('a.nav-item').eq(2).contains('Balance Budget').click();
      cy.location('pathname').should('eq', '/balance-budget');
      cy.contains('h2', "Balance My City's Budget");
    });

    it('Goes to About Us page', () => {
      cy.get('.nav-icon').click();
      cy.get('a.nav-item').eq(3).contains('About Us').click();
      cy.location('pathname').should('eq', '/about');
      cy.contains('h2', 'About Us');
    });

    it('Goes to Take Action page', () => {
      cy.get('.nav-icon').click();
      cy.get('a.nav-item').eq(4).contains('Take Action').click();
      cy.location('pathname').should('eq', '/take-action');
      cy.contains('h2', 'Take Action');
    });
  });
});
