///<reference types="Cypress"/>
import {Given, When,Then} from "cypress-cucumber-preprocessor/steps";
Given("The user in the Home page ",()=>{
    cy.visit('/')
})
When("The new User wants to navigate to Registeration screen",()=>{
        // Navigate to registeration form
        cy.get('.ico-register').click();
})
When("The User inputs valid First Name",()=>{
    cy.get("#FirstName").type("aqw")

})
When("The User inputs valid Last Name",()=>{
    cy.get("#LastName").type("wqa")
})
When("The user inputs an email was not registered before",()=>{
    cy.get("#Email").type("ata.email165@test.com")
})
When("The user Inputs valid Password",()=>{
    cy.get("#Password").type("12345678")
})
When("The User Inputs the inputed password again in The confirmation text field",()=>{
    cy.get("#ConfirmPassword").type("12345678")
})
When("The User clicks Submit button",()=>{
    cy.get('#register-button').click();
})
Then("The Registeration is succeeded",()=>{
    cy.contains("Your registration completed").should("to.be.exist")
})

