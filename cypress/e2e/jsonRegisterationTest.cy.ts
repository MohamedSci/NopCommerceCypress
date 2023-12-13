import regData from '../fixtures/regData.json'
describe('template spec', () => {
  before('passes', () => {
    cy.visit('/')
  })
})

/* ==== Test Created with Cypress Studio ==== */
it('newRegistrationTest', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.fixture("regData").then((dataSet)=>{
for(var data of dataSet){
  cy.visit('/')
  // Navigate to registeration form
  cy.get('.ico-register').click();
  // Input valid data into all required fields registeration form
  cy.get("#FirstName").type(data.firstname)
  cy.get("#LastName").type(data.lastname)
  cy.get("#Email").type(data.email)
  cy.get("#Password").type(data.password)
  cy.get("#ConfirmPassword").type(data.password)
  // Submit to registeration form
  cy.get('#register-button').click();
// Check the Submission is succeeded
  cy.contains("Your registration completed").should("to.be.exist")
}
  })

// has not been tested yet

});

