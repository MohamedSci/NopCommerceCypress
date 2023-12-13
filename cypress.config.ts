import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    experimentalStudio:true,
    baseUrl: "https://demo.nopcommerce.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
