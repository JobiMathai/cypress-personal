const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


module.exports = {
  'projectId': '4b7344',
  e2e: {
    baseUrl: 'https://localhost:8080',
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}"
  },
  env:{
    navbarText: 'cypress.io',
  }
  
}