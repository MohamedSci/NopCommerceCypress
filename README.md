# NopCommerce
A Cypess Project that Creates an automated test-case for User Registration and Login: https://demo.nopcommerce.com/


Techs:
- Java Script
- NodeJs
- OOP
- Cypress
- DDT
- BDD
- Cucumber
- POM 

It automates a scenario of Registration with many different data set coming from excel sheet, csv file, Json file , properties file and Facker data provider .

then the user Login with the data used in the previous registeration.
then the user log out.

Page object model is used in this project which means each Web page has a corresponding Java class all needed elements are instintiated there and PageFactory is also used.

Typescript integration with cypress
Step 1: install nodejs and cypress (in my case i have already installed)
Step 2: add tsconfig.json file to you project
Step 3: install typescript
Step 4 install cucumber configuration and plugin (npm install @types/cypress-cucumber-preprocessor)
Step 5: Navigate to url https://www.npmjs.com/package/cypress-cucumber-preprocessor
Step 6: change file names asts under cypress/support/ and cypress/plugin/
Step 7: install @types/browserify
