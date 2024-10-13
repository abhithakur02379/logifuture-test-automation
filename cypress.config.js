const { defineConfig } = require('cypress')
const path = require("path");
const fs = require("fs-extra");

function getConfigurationByFilename(env) {
  const pathToConfigFile = path.resolve(".", "cypress/fixtures", `${env}.json`);

  return fs.readJson(pathToConfigFile);
}
module.exports = defineConfig({
  // projectId: 'rhyoxi',
  chromeWebSecurity: false,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 60000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  chromeWebSecurity: false,
  trashAssetsBeforeRuns: true,


  e2e: {
    setupNodeEvents(on, config) {
      const file = config.env.configFile || "dev";
      return getConfigurationByFilename(file);
    },
    env: {
      environment: "dev",
    },
  },

  
});
