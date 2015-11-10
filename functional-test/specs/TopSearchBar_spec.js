var TopSearchBarPage = require('../page-objects/TopSearchBarPage.js');
var MapsPage = require('../page-objects/MapsPage.js');

var driver = browser.driver;
var EC = protractor.ExpectedConditions;

describe('Test Top Search bar:------>', function () {
    var topSearchBarPage = new TopSearchBarPage();
    var mapsPage = new MapsPage();

    beforeEach(function () {
        browser.get('');//This parameter reads the baseURL configured on the Config.js file
        browser.driver.manage().window().maximize();

    });

    it('User should see map after entering Origin and Destination', function () {
        topSearchBarPage.clearOriginField();
        topSearchBarPage.typeOrigin('Ams');
        topSearchBarPage.originAirtportLabelFromFirstSuggestedResult.isPresent();
        topSearchBarPage.typeOrigin(protractor.Key.ENTER);
        topSearchBarPage.typeOrigin(protractor.Key.TAB);
        topSearchBarPage.typeDestination('Bei');
        topSearchBarPage.destinationAirtportLabelFromFirstSuggestedResult.isPresent();
        topSearchBarPage.typeDestination(protractor.Key.ENTER);

        expect(mapsPage.calendar.isPresent()).toBeTruthy();
     });



    //xit('Destination airport cannot be the same as Origin airport', function () {
    //    /* Type in Origin field*/
    //    topSearchBarPage.clearOriginField();
    //    topSearchBarPage.typeOrigin('Pas');
    //
    //    /* Validate that 4th suggested result iata is 'AOL'. First result is 0.*/
    //    expect(topSearchBarPage.getAirportIataFromSuggestedResultList(3)).toEqual('AOL');
    //
    //    /* Click 4th result*/
    //    topSearchBarPage.getSuggestedResultAtPosition(3).click();
    //
    //    /* Type in Destination field*/
    //    topSearchBarPage.typeDestination('Pas');
    //
    //    browser.driver.sleep(1000);
    //    /* Validate that AOL airport is not present*/
    //    expect(topSearchBarPage.getIataFromList('AOL').isPresent()).toBeFalsy();
    //});
    //
    //xit('Airport full name renders in suggested results list', function () {
    //    topSearchBarPage.clearOriginField();
    //    topSearchBarPage.typeOrigin('New');
    //    expect(topSearchBarPage.getAirportNameFromSuggestedResultList('New York (John F Kennedy International Airport)').isPresent())
    //        .toBeTruthy();
    //});
    //
    //xit('Hotels - Arrival date is today and Departure date is tomorrow by default ', function () {
    //    topSearchBarPage.clickPurchaseTypeButton();
    //    topSearchBarPage.clickHotelOption();
    //    expect(topSearchBarPage.getCurrentArrivalDate()).toEqual(topSearchBarPage.getCurrentSystemDate());
    //    expect(topSearchBarPage.getCurrentDepartureDate()).toEqual(topSearchBarPage.getTomorrowSystemDate());
    //});

    it('User should see Hotel buttons working properly', function () {
        topSearchBarPage.clickPurchaseTypeButton();
        topSearchBarPage.clickHotelOption();
        expect(topSearchBarPage.getRoomAmount('1').isPresent()).toBeTruthy();
        expect(topSearchBarPage.deductRoomButtonDisabled.isPresent()).toBeTruthy();
        topSearchBarPage.clickAddRoomButton(1);
        expect(topSearchBarPage.getRoomAmount('2').isPresent()).toBeTruthy();
        expect(topSearchBarPage.deductRoomButtonDisabled.isPresent()).toBeFalsy();
        topSearchBarPage.clickDeductRoomButton(1);
        expect(topSearchBarPage.getRoomAmount('1').isPresent()).toBeTruthy();
        expect(topSearchBarPage.deductRoomButtonDisabled.isPresent()).toBeTruthy();
    });



    it('User should see Hotel options working correctly by adding rooms and verifying that buttons gets enabled/disabled', function () {
        topSearchBarPage.clickPurchaseTypeButton();
        topSearchBarPage.clickHotelOption();
        expect(topSearchBarPage.searchButton.isEnabled()).toBeFalsy();
        topSearchBarPage.typeCity("lax");
        topSearchBarPage.typeCity(protractor.Key.ENTER);
        expect(EC.elementToBeClickable(topSearchBarPage.departureDate));
        topSearchBarPage.clickAddRoomButton(3);
        expect(topSearchBarPage.addRoomButton.isPresent()).toBeTruthy();
        expect(topSearchBarPage.searchButton.isEnabled()).toBeTruthy();

    });

    it('User should see Hotel Detail View', function () {
        topSearchBarPage.clickPurchaseTypeButton();
        topSearchBarPage.clickHotelOption();
        topSearchBarPage.typeCity("lax");
        topSearchBarPage.typeCity(protractor.Key.ENTER);
        expect(EC.elementToBeClickable(topSearchBarPage.departureDate));
        topSearchBarPage.clickAddRoomButton(3);
        expect(topSearchBarPage.addRoomButton.isPresent()).toBeTruthy();
        expect(topSearchBarPage.searchButton.isEnabled()).toBeTruthy();
        topSearchBarPage.clickSearchButton();

        


    });
});