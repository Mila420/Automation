const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.google.com',
    specPattern: 'cypress/integration/**/*.js',
    videosFolder: 'cypress/videos',
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots/automation_test.js',
    supportFile: false,  // Desactiva el archivo de soporte
    setupNodeEvents(on, config) {
      // Implementa eventos y otras configuraciones si es necesario
    },
  },
});
