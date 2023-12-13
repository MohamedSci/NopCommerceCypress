import { defineConfig } from "cypress";
import { Task } from "listr2/dist/lib/task";

export default defineConfig({
  e2e: {
    experimentalStudio:true,
    baseUrl: "https://demo.nopcommerce.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
