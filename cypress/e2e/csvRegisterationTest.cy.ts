import { List } from "cypress/types/lodash"

const neatCsv = require("neat-csv")
let table
/***
 * 1) npm install neat-csv --save-dev
 * 2) assign the neat-csv package to a const
 * 3) Put your Csv file in fixture folder
 * 4) Use before hook to call a fixture of csv file
 * 5) call .then(neatCsv) that will convert the data in the csv file into typescript object
 * 6)call .then(data) to assign this data to public variable to enable you to use it in your tests
 * 7) Use for loop to access the each data entity from  every row in your csv data file
 */
before(()=>{
        cy.visit('/')
    cy.fixture("csvData.csv")
       .then(neatCsv)
       .then(data=>{
            table = data
       })
       .then(console.table)
})

it('csvRegistrationTest', function() {
  for(var data of table){
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
  



