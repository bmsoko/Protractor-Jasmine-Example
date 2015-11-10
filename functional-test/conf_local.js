//conf.js
//Report for tests
var HtmlReporter = require('protractor-html-screenshot-reporter');
var reporter = new HtmlReporter({
    baseDirectory: './protractor-result', // a location to store screen shots.
    docTitle: 'Report Test Summary',
    docName: 'protractor-tests-report.html'
});
exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub', //Uncomment if local webdrivermanager is local.
    suites: {
        header: '././././specs/TopSearchBar_spec.js',
        tiles:  '././././specs/Tiles_spec.js',
        maps:'././././specs/Maps_spec.js'
    },
    capabilities: {
        'browserName': 'firefox'
    },
    baseUrl:'http://localhost:9000',

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 200000,
        realTimeFailure: true,
        showTiming: true,
        includeStackTrace: true,
        isVerbose: true,
        onComplete: null
    },

    onPrepare: function () {
        jasmine.getEnv().addReporter(reporter);
        browser.driver.manage().window().maximize();
        //global.dvr = browser.driver; //variable to call selenium directly
        //global.isAngularSite = function (flag) {
        //    browser.ignoreSynchronization = !flag; //This setup is to configure when testing non-angular pages
        //};
        browser.manage().timeouts().implicitlyWait(20000);
        //browser.getCapabilities().then(function (cap) {
        //    browserName = cap.caps_.browserName;
        //});


    }
}