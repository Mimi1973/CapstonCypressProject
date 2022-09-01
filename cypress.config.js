const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "jb65wt",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
