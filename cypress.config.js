const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env:{
    url:"https://the-internet.herokuapp.com/"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
