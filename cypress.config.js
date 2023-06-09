const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false
  },
});


module.exports = {
  'projectId': '4b7344',
  e2e: {
    baseUrl: 'http://127.0.0.1:3000',
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}"
  },
  env:{
    navbarText: 'cypress.io',
  }
  
}