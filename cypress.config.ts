import { defineConfig } from "cypress";
import { Task } from "listr2/dist/lib/task";
const cucumber = require("cypress-cucumber-preprocessor").default
export default defineConfig({
  projectId: '8q3ksw',
  e2e: {
    experimentalStudio:true,
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: true,
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    baseUrl: "https://demo.nopcommerce.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
