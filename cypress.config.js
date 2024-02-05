const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "pqaz26",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    baseUrl:  process.env.CYPRESS_BASE_URL ?? 'http://localhost:8000',
    timeout: 10000,
  },
});
