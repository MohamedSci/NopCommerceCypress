
/***
 * 1) Put your json file in fixture folder
 * 2) Use before hook to call a fixture of json file
 * 3) call .then(data) to assign this data to public variable to enable you to use it in your tests
 * 4) Use for loop to access the each data entity from  every row in your csv data file
 */
describe('template spec', () => {
  before('passes', () => {
    cy.visit('/')
  })

  it('newRegistrationTest', function() {
      // Navigate to registeration form
      cy.get('.ico-register').click();

      cy.intercept("POST","https://demo.nopcommerce.com/register?returnurl=%2F").as("post_Reg")

      // Input valid data into all required fields registeration form
      cy.get("#FirstName").type("Moha11")
      cy.get("#LastName").type("lastname11")
      cy.get("#Email").type("tewq124@ttt.com")
      cy.get("#Password").type("password")
      cy.get("#ConfirmPassword").type("password")
      // Submit to registeration form
      cy.get('#register-button').click();
      // ... Perform your test logic ...
      cy.wait('@post_Reg')

      cy.get('@post_Reg').then((interception)=>{
      console.log('interception ---------')
      console.log(interception)
      expect( interception["state"] ).eq("Complete")
      expect( interception["response"]["statusCode"]).eq(302)
      console.log('********************** interception **********************')
})
    // Check the Submission is succeeded
      cy.contains("Your registration completed").should("to.be.exist")
      
    });
    
    


})

