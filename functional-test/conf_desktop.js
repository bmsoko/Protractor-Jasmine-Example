var testName = 'Fareness Testing'; //Change Project's name here in order to be identified in BrowserStack


// An example configuration file.
exports.config = {
    //baseUrl:'http://staging.fareness.com',
    baseUrl:'http://localhost:9000',

    // The address of a running selenium server.
    //seleniumAddress: 'http://hub.browserstack.com/wd/hub',
    seleniumAddress: 'XXXXXXXXX',
    // Capabilities to be passed to the webdriver instance.
    multiCapabilities: [
        {
            name: testName,
            browserName: 'firefox',
            //browser_version: '40.0',
            platform: 'OS X 10.10',
            version:'40.0',
            screenResolution: '1280x800',
            username: 'XXXX' ,
            accessKey: 'XXXX'
        }
        ,
        {
            name: testName,
            browserName: 'chrome',
            platform: 'Windows 8.1',
            version:'44.0',
            screenResolution: '1280x1024',
            username: 'xxxxx',
            accessKey: 'XXXX'
        }
        ,
        {
            name: testName,
            browserName: 'safari',
            //browser_version: '40.0',
            platform: 'OS X 10.10',
            version:'8.0',
            screenResolution: '2048x1536',
            username: 'xxxxx',
            accessKey: 'XXXX'
        }
        ,
        {
            name: testName,
            browserName: 'internet explorer',
            //browser_version: '40.0',
            platform: 'Windows 8.1',
            version:'11.0',
            screenResolution: '1280x1024',
            username: 'xxxxx',
            accessKey: 'XXXX'
        }
        // ,
        // {
        //     name: testName,
        //     'browserName': 'IE',
        //     browser_version: '11.0',
        //     os: 'Windows',
        //     os_version: '8.1',
        //     resolution: '2048x1536',
        //     'browserstack.user': browserstackUser,
        //     'browserstack.key': browserstackKey,
        //     'browserstack.debug': 'true',
        //     'browserstack.selenium_version': '2.45.0',
        //     'browserstack.ie.driver': '2.44'
        //     //ignoreProtectedModeSettings: true
        // }
        //,
        //{
        //    name: testName,
        //    browserName: 'Firefox',
        //    browser_version: '37.0',
        //    os: 'Windows',
        //    os_version:'8.1',
        //    'resolution' : '1024x768',
        //    //username: 'bruno-monsoon',
        //    //accessKey: '5d906695-dfc6-43ef-90b1-397d1c80a556'
        //    'browserstack.user': browserstackUser,
        //    'browserstack.key': browserstackKey,
        //    'browserstack.debug': 'true',
        //    'browserstack.selenium_version': '2.45.0'
        //}
    ],

    // Spec patterns are relative to the current working directly when
    // protractor is called.

    suites: {
        header: '././././specs/TopSearchBar_spec.js',
        tiles: '././././specs/Tiles_spec.js'
    },


    // Maximum number of total browser sessions to run. Tests are queued in
    // sequence if number of browser sessions is limited by this parameter.
    // Use a number less than 1 to denote unlimited. Default is unlimited.
    maxSessions: 2,

    // protractor will save the test output in json format at this path.
    // The path is relative to the location of this config.
    resultJsonOutputFile: null,

    framework: 'jasmine2',

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 100000,
        realtimeFailure: true,
        showTiming: true,
        includeStackTrace: true,
        isVerbose: true,
        onComplete: null
    },

    onPrepare: function () {
        browser.driver.manage().window().maximize();
        global.dvr = browser.driver; //variable to call selenium directly
        global.isAngularSite = function (flag) {
            browser.ignoreSynchronization = !flag; //This setup is to configure when testing non-angular pages
        };
        browser.manage().timeouts().implicitlyWait(10000);
        browser.getCapabilities().then(function (cap) {
            browserName = cap.caps_.browserName;
        });
        //browser.get("http://monsoon:hellomonsoon!@staging.fareness.com");

    }

};