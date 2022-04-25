describe('The Daily feed user flow', () => {
  beforeEach(() => {
    cy.intercept('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=jAbTIC66rxPyXP1pM55LiAYtPLmEIclC', { fixture: 'articleInfo.json'} )
    cy.visit('http://localhost:3000/')
  })

  it('Should have a navbar with title and filter option', () => {
    cy.get(".home-title").should('have.text', "The Daily Feed");
    cy.get('.section-select').should('have.text', 'All Stories');
  })

  it('Should display card articles', () => {
    cy.get(".articles-container").should('have.length', 1);
  })

  it('should allow users to choose a different news category', () => {
    cy.get('.section-select').select('arts');
  })

  it('Should let user to click on the view article button for more information', () => {
    cy.get(':nth-child(2) > a > button').click()
    cy.get('h1').should("be.visible")
    cy.get('.single-card-image').should("be.visible")
    cy.get('h2').should("be.visible")
    cy.get('a').should('have.attr', 'href')
  })

  it("Should let user click on read full article that redirects them to the full article link", () => {
    cy.get(':nth-child(2) > a > button').click()
    cy.get('a').should('have.attr', 'href', "https://www.nytimes.com/2022/04/15/arts/olga-smirnova-ballet-bolshoi-ukraine-war.html")
  })

  it('Should allow user to navigate back home when in single article view', () => {
    cy.get('.articles-container > :nth-child(1) > a > button').click()
    cy.get('.link').click().location().should((location => {
      expect(location.href).to.eq('http://localhost:3000/')
    }))
  })
  it('should display a not found page if the user visits a bad link', () => {
    cy.visit('http://localhost:3000/article/**')
    cy.get('.error-message').contains("I'm sorry, this page does not exist, please return home.")
  })
})