export const config = {
  //runner: 'local',
  //port: 4723,
  
  user: 'oauth-lukinhascop1-f2ccd',
  key: '615d7130-c0a4-4765-b572-91f1d11da6e7',
  hostname: 'ondemand.us-west-1.saucelabs.com',
  port: 443,
  path: '/wd/hub',
  
  specs: [
  './test/specs/**/*.js'  // esse glob pega qualquer arquivo .js dentro da pasta specs e subpastas
],
  exclude: [],
  maxInstances: 1,
  capabilities: [
   // {
   // platformName: 'Android',
   // /'appium:deviceName': 'ebac-qe',
   // 'appium:platformVersion': '11.0',
   // 'appium:automationName': 'UiAutomator2',
   // 'appium:app': `${process.cwd()}/app/ebacshop.apks`,
   // 'appium:appWaitActivity': '.MainActivity',
   // 'appium:disableIdLocatorAutocompletion': true
   // }
{
 platformName: 'Android',
 'appium:app': 'storage:filename=ebacshop (1).aab', // The filename of the mobile app
 'appium:deviceName': 'Android GoogleAPI Emulator',
 'appium:platformVersion': '10.0',
 'appium:automationName': 'UiAutomator2',
 "appium:disableIdLocatorAutocompletion": true,

 'sauce:options': {
    build: 'appium-build-teste-ebacshop',
    name: '<EBAC Shop Test>',
    deviceOrientation: 'PORTRAIT',
    appiumVersion: '2.0.0'
  },
},

],
  logLevel: 'info',
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: ['spec',
    ['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotReporting: false,
    }]

  ],
  mochaOpts: {
  ui: 'bdd',
  timeout: 60000
  },
  afterTest: async function(test, context, { error, result, duration, passed, retries }) {
  
    await driver. takeScreenshot();

}

};
