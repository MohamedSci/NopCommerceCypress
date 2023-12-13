const neatCsv = require("neat-csv")
let table
// describe("Csv Registeration",()=>{
before(()=>{
    cy.fixture("csvData.csv")
       .then(neatCsv)
       .then(data=>{
            table = data
       })
       .then(console.table)
})

it('csvRegistrationTest', function() {
  for(var data of table){
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
  
//   });



