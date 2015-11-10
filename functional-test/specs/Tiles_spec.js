var TilesPage = require('../page-objects/TilesPage.js');
var TopSearchBarPage = require('../page-objects/TopSearchBarPage.js');
var MapsPage = require('../page-objects/MapsPage.js');
//var baseUrl = 'http://localhost:9000';
//var baseUrl = 'http://staging.fareness.com';
var driver = browser.driver;
var EC = protractor.ExpectedConditions;
var backEndMocks = require('../services/httpBackEndMocks');

describe('Verify Tiles Section: --->', function () {
    var tilesPage = new TilesPage();
    var topSearchBarPage = new TopSearchBarPage();
    var mapsPage = new MapsPage();


    beforeEach(function () {
        browser.get('');
        browser.driver.manage().window().maximize();
    });


    it('User should be able to see elements on the tiles grid', function () {
        expect(tilesPage.tilesGrid.count()).not.toEqual(0);
    });


    it('User should correctly see tiles with corresponding image and text', function () {
        expect(tilesPage.tilesGrid.get(1).getAttribute("src")).not.toEqual("");
        expect(tilesPage.flightIcon.get(0).getAttribute("src")).toContain("/assets/images/ui/icons/flight@2x.png");
        expect(tilesPage.tilesGrid.get(0).getText()).not.toBeUndefined();
        expect(tilesPage.tilesGrid.get(1).getAttribute("src")).not.toEqual("");

    });

});


xdescribe('Verify Themes & Tiles Section (Mocked): --->', function () {
    var tilesPage = new TilesPage();

    beforeEach(function () {
        browser.driver.manage().window().maximize();
    });

    it('User should see correctly when all themes are present', function () {
        browser.addMockModule('httpBackEndMock', backEndMocks.build([backEndMocks.allTiles,backEndMocks.allThemes]));
        browser.get('');
        expect(tilesPage.themeRepeater.get(2).getText()).toContain('Island');
        expect(tilesPage.themeRepeater.count()).toEqual(10);

    });
    //Folling test should be modified when the api page is correctly finished.
    it('User should correctly see tiles with corresponding image and text', function () {
        browser.addMockModule('httpBackEndMock', backEndMocks.build([backEndMocks.allThemes,backEndMocks.allTiles]));
        browser.get('');
        expect(tilesPage.tilesGrid.get(0).getText()).toContain("Honolulu");
        expect(tilesPage.tilesGrid.count()).toEqual(106);
        expect(tilesPage.flightIcon.isDisplayed()).toBeTruthy();
    });

    it('User should be able to click next and previous selectors on themes',function() {
        browser.addMockModule('httpBackEndMock', backEndMocks.build([backEndMocks.allThemes,backEndMocks.allTiles]));
        browser.get('');
        tilesPage.backAndForthHorizontalScrollableBar(3,1);
        expect(tilesPage.themeRepeater.get(9).isDisplayed()).toBeTruthy();

    });

    //Test case deprecated since the requirements had changed.
    xit('User should not be able to click next when reached the latest item on Theme scroll',function() {
        browser.addMockModule('httpBackEndMock', backEndMocks.build([backEndMocks.allThemes,backEndMocks.allTiles]));
        browser.get('');
        tilesPage.backAndForthHorizontalScrollableBar(5,0);
        browser.sleep(1000);
        expect(tilesPage.isClickable(tilesPage.themeNextAdvancer)).toBeFalsy();

    });

    it('User should see correctly when all themes are present', function () {
        browser.addMockModule('httpBackEndMock', backEndMocks.build([backEndMocks.allThemes,backEndMocks.allTiles]));
        browser.get('');
        expect(tilesPage.themeRepeater.get(2).getText()).toContain('Island');
        expect(tilesPage.themeRepeater.count()).toEqual(10);

    });
    //This next test is not yet fully implemented.
    xit('User should see be able to see themes when clicking on Musem theme', function () {
        browser.addMockModule('httpBackEndMock', backEndMocks.build([backEndMocks.allThemes,backEndMocks.allTiles]));
        browser.get('');
        tilesPage.clickOnTheme('museum');
        //expect(tilesPage.themeRepeater.get(2).getText()).toContain('Island');


    });

});