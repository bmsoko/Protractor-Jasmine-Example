var browserstackUser = 'elaineyu1';
var browserstackKey = 'hBirdppeguTdPNdjyqNg';
var testName = 'FOVE Testing'; //Change Project's name here in order to be identified in BrowserStack




// An example configuration file.
exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://bruno-monsoon:5d906695-dfc6-43ef-90b1-397d1c80a556@ondemand.saucelabs.com:80/wd/hub',
    //seleniumAddress: 'http://hub.browserstack.com/wd/hub',
    //seleniumAddress: 'http://127.0.0.1:4723/wd/hub',//Local Appium
    // Capabilities to be passed to the webdriver instance.
    multiCapabilities: [
        {
            name: testName,
            platformName: 'iOS',
            platformVersion: '7.1',
            browserName: '',
            app: 'safari',
            deviceName: 'iPhone Simulator',
            'appium-version': "1.4.0",
            username: 'bruno-monsoon',
            accessKey: '5d906695-dfc6-43ef-90b1-397d1c80a556'

        }
        ,
        {
            name: testName,
            platformName: 'Android',
            platformVersion: '4.4',
            browserName: 'chrome',
            deviceName: 'Google Nexus 7 HD Emulator',
            'appium-version': "1.4.0",
            username: 'bruno-monsoon',
            accessKey: '5d906695-dfc6-43ef-90b1-397d1c80a556'
        }


        ], //Here ends the multiCapabilities.

    // Spec patterns are relative to the current working directly when
    // protractor is called.

    suites: {
        mobile: './././specs/mobile_spec.js',
        waitlist: './././specs/waitlist_page_spec.js',
        press: './././specs/press_page_spec.js',
        news: './././specs/news_page_spec.js'
    },


    // Maximum number of total browser sessions to run. Tests are queued in
    // sequence if number of browser sessions is limited by this parameter.
    // Use a number less than 1 to denote unlimited. Default is unlimited.
    maxSessions: 2,

    // protractor will save the test output in json format at this path.
    // The path is relative to the location of this config.
    resultJsonOutputFile: null,
    //Added
    allScriptsTimeout: 90000,
    getPageTimeout: 90000,

    framework: 'jasmine2',

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 90000,
        realtimeFailure: true,
        showTiming: true,
        includeStackTrace: true,
        isVerbose: true,
        onComplete: null
    },

    onPrepare: function () {
        global.dvr = browser.driver; //variable to call selenium directly
        browser.getCapabilities().then(function (cap) {
            browserName = cap.caps_.browserName;
        });

    }

};