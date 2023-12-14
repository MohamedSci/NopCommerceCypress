import cypress from "cypress";

/***
 * 1) Put your json file in fixture folder
 * 2) Use before hook to call a fixture of json file
 * 3) call .then(data) to assign this data to public variable to enable you to use it in your tests
 * 4) Use for loop to access the each data entity from  every row in your csv data file
 */
/***
 * 1) From dev tools console Got to Network and click the api og Post Registeration
 * 2) before your action on UI make an interception and assign it to aliase
 * 3) Perform The Action on UI
 * 4)  add wait command to wait for the Interception
 * 5) call get(@Interception) commannd and then()
 * 6) print in the console the interception [object] 
 * 7) Make validation on the interception's response or the request
 * 8) Store The Auth token cookie, etc to process environment or cypress environment
 */
let testCookie
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
      cy.get("#Email").type("tewq222@ttt.com")
      cy.get("#Password").type("password")
      cy.get("#ConfirmPassword").type("password")
      // Submit to registeration form
      cy.get('#register-button').click();
      // ... Perform your test logic ...
      cy.wait('@post_Reg')
      // Validate the data in the Interception
      cy.get('@post_Reg').then((interception)=>{
      console.log(interception)
      expect( interception["state"] ).eq("Complete")
      expect( interception["response"]["statusCode"]).eq(302)
                                                })
      // Check the Submission is succeeded
      cy.contains("Your registration completed").should("to.be.exist")//A confirmation doaloge in UI is Displayed    
      // Assign the authentication cookie to environment variable 
      cy.getCookie(".Nop.Authentication").then(cookie=>{
        testCookie=cookie.value
        console.log("-----------cookie.value ---"+cookie.value)
        process.env.nopAuth = cookie.value
        Cypress.env("nopAuth",cookie.value)
      })

      console.log("-----------Cypress.env Cookie ---"+Cypress.env("nopAuth"))
      console.log("-----------process.env.nopAuth Cookie ---"+process.env.nopAuth)
      expect(process.env.nopAuth).eq(testCookie)
      expect(Cypress.env("nopAuth")).eq(testCookie)
      console.log("************ Finished ********************")
    })
      


    
    


})

