Feature: User Registeration First time
  Scenario: A new user inputs new valid data for Registeration
	Given The user in the Home page 
	When The new User wants to navigate to Registeration screen
	And The User inputs valid First Name
	And The User inputs valid Last Name
	And The user inputs an email was not registered before
	And The user Inputs valid Password
	And The User Inputs the inputed password again in The confirmation text field
	And The User clicks Submit button
	Then The Registeration is succeeded	