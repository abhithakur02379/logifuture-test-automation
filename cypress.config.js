const { defineConfig } = require('cypress')
const path = require('path')
const fs = require('fs-extra')

function getConfigurationByFilename(env) {
  const pathToConfigFile = path.resolve('.', 'cypress/fixtures', `${env}.json`)
  return fs.readJson(pathToConfigFile)
}

module.exports = defineConfig({

  chromeWebSecurity: false,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 90000,
  responseTimeout: 60000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  trashAssetsBeforeRuns: true,
  video: true,
  screenshotOnRunFailure: true,
  screenshotConfig: {
    overwrite: true
  },

  e2e: {
    async setupNodeEvents(on, config) {
      const file = config.env.configFile

      return getConfigurationByFilename(file)
    },
    specPattern: 'cypress/e2e/**',
    env: {

    }
  }
})


