const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 8000,
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth',
    viewportHeight : 550,
    experimentalRunAllSpecs : true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
