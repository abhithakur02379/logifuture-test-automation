const { defineConfig } = require('cypress')

module.exports = defineConfig({

  chromeWebSecurity: false,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 60000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  chromeWebSecurity: false,
  trashAssetsBeforeRuns: true,
  video: true,

  e2e: {
    setupNodeEvents(on, config) {
    },
  },

  
});
