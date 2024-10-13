const { defineConfig } = require('cypress')
const path = require("path");
const fs = require("fs-extra");
const ping = require('ping');

function getConfigurationByFilename(env) {
  const pathToConfigFile = path.resolve(".", "cypress/fixtures", `${env}.json`);

  return fs.readJson(pathToConfigFile);
}
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
      // const file = config.env.configFile || "dev";
      // return getConfigurationByFilename(file),
      on('task', {
        ping(host) {
          return new Promise((resolve) => {
            ping.sys.probe(host, (isAlive) => resolve(isAlive))
          })
        },
      })
    },
    env: {
      environment: "dev",
    },
  },

  
});
