let rowsLength;

describe('The example shows how to use Data Driven Testing using Excel file.', () => {
    before(() => {
        cy.task('readXlsx', { file: 'cypress/fixtures/excelData.xlsx', sheet: "Sheet1" }).then((rows) => {
            // @ts-ignore
            rowsLength = rows.length;
            cy.writeFile("cypress/fixtures/xlsxData.json", { rows })
        })
        cy.visit(Cypress.config('baseUrl'));
    })


    it("example shows how to use data from Excel file.", () => {
        cy.fixture('xlsxData').then((excelData) => {
            for(var data of excelData){
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
    });
});