describe('template spec', () => {
  before('passes', () => {
    cy.visit('/')
  })
})

/* ==== Test Created with Cypress Studio ==== */
it('newRegistrationTest', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('/');
  cy.get('.ico-register').click();
  /* ==== End Cypress Studio ==== */
  cy.get("#FirstName").type("fff")
  cy.get("#LastName").type("lll")
  cy.get("#Email").type("eee123321@test.com")
  cy.get("#Password").type("12345678")
  cy.get("#ConfirmPassword").type("12345678")

  cy.get('#register-button').click();
// has not been tested yet
  cy.contains("Your registration completed").should("to.be.exist")

});

