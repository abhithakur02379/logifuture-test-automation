const { defineConfig } = require('cypress')

module.exports = defineConfig({

  chromeWebSecurity: false,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 60000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  chromeWebSecurity: false,
  trashAssetsBeforeRuns: true,
  video: false,

  e2e: {
    setupNodeEvents(on, config) {

      on("before:browser:launch", (browser = {}, launchOptions) => {
        console.log(launchOptions.args);
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.args.push("--incognito");
          return launchOptions;
        }
        
      })
    },
  },

  
});
