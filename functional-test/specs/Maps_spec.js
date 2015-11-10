var MapsPage = require('../page-objects/MapsPage.js');
var TopSearchBarPage = require('../page-objects/TopSearchBarPage.js');
//var baseUrl = 'http://localhost:9000';
var driver = browser.driver;
var EC = protractor.ExpectedConditions;
var backEndMocks = require('../services/httpBackEndMocks');

describe('Verify map is functionality: --->', function () {
    var mapsPage = new MapsPage();
    var topSearchBarPage = new TopSearchBarPage();


    beforeEach(function () {
        browser.get('');
        browser.driver.manage().window().maximize();
    });


    it('Verify that google maps is present when entering an origin and a destination on the top search bar', function () {
        topSearchBarPage.clearOriginField();
        topSearchBarPage.typeOrigin('Pas');
        topSearchBarPage.getSuggestedResultAtPosition(3).click();
        topSearchBarPage.typeDestination('Bei');
        topSearchBarPage.getSuggestedResultAtPosition(3).click();
        expect(mapsPage.map.isDisplayed()).toBeTruthy();
    });

    it('Verify that the map calendar widget is displayed and contains data', function () {
        topSearchBarPage.clearOriginField();
        topSearchBarPage.typeOrigin('Pas');
        topSearchBarPage.getSuggestedResultAtPosition(3).click();
        topSearchBarPage.typeDestination('Bei');
        topSearchBarPage.getSuggestedResultAtPosition(3).click();
        expect(mapsPage.mapCalendarWidget.isDisplayed()).toBeTruthy();
        expect(mapsPage.mapCalendarDates.isDisplayed()).toBeTruthy();
    });


    xit('Verify that the map calendar widget is displayed and contains data', function () {
        topSearchBarPage.clearOriginField();
        topSearchBarPage.typeOrigin('Pas');
        topSearchBarPage.getSuggestedResultAtPosition(3).click();
        topSearchBarPage.typeDestination('Bei');
        topSearchBarPage.getSuggestedResultAtPosition(3).click();

    });

});


xdescribe('Verify (Mocked): --->', function () {
    var tilesPage = new TilesPage();

    beforeEach(function () {
        browser.driver.manage().window().maximize();
    });

    it('User should see correctly when all themes are present', function () {
        browser.addMockModule('httpBackEndMock', backEndMocks.build([backEndMocks.allThemes]));
        browser.get(baseUrl);


    });

});