import { defineConfig } from "cypress";
import { Task } from "listr2/dist/lib/task";
const cucumber = require("cypress-cucumber-preprocessor").default
export default defineConfig({
  e2e: {
    experimentalStudio:true,
    baseUrl: "https://demo.nopcommerce.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor',cucumber())
    },
    specPattern:"cypress/e2e/BDD_Registration/*.feature"
  },
});
