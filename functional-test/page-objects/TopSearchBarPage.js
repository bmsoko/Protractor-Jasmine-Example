var TopSearchBarPage = function () {

    /* UI elements mapping */
    this.originField = element(by.css('[label=From]'))
        .element(by.css('[placeholder=Origin]'));
    this.destinationField = element(by.css('[label=To]'))
        .element(by.css('[placeholder=Anywhere]'));
    this.hotelDestination = element(by.model("cityObj"));
    this.searchButton = element(by.css('[ng-click="hc.goToHotels())"]'));
    this.addRoomButton = element(by.css('[ng-click="addRooms()"]'));
    this.searchButton = element(by.css('[ng-click="hc.goToHotels()"]'));
    this.deductRoomButton = element(by.css('[ng-click="deductRooms()"]'));
    this.addRoomButtonDisabled = element(by.css('[ng-click="addRooms()"][disabled="disabled"]'));
    this.deductRoomButtonDisabled = element(by.css('[ng-click="deductRooms()"][disabled="disabled"]'));
    this.suggestedResultsListContainer = element(by.css('[ng-show=isOpen()]'));
    this.suggestedResultsList = element.all(by.css('[role=option]'));
    this.originAirtportLabelFromFirstSuggestedResult = element(by.css('#typeahead-13-8565-option-0 > a:nth-child(1) > b:nth-child(1)'));
    this.destinationAirtportLabelFromFirstSuggestedResult = element(by.css('#typeahead-15-9833-option-0 > a:nth-child(1) > b:nth-child(1)'));
    this.purchaseTypeButton = element(by.css('button#purchaseTypeSelector'));
    this.hotelsOption = element(by.css('[info="Hotels Only"]'));
    this.arrivalDate = element(by.css('[is-open="hotelDates.arrivalDateOpened"]'));
    this.departureDate = element(by.css('[is-open="hotelDates.departureDateOpened"]'));
    this.roomAmountLocator = 'big.ng-binding';
    this.airportLabelLocator = element(by.css('span.airport-label'));
    this.airPortDestLocator = element(by.xpath('/html/body/div[1]/header/div/form/span/span[1]/label[2]/span'));



    /* Basic features */
    this.clickPurchaseTypeButton = function () {
        this.purchaseTypeButton.click();
    }

    this.clickAddRoomButton = function (amount) {
        for (i = 0; i < amount; i++) {
            this.addRoomButton.click();
        }
    }

    this.clickDeductRoomButton = function (amount) {
        for (i = 0; i < amount; i++) {
            this.deductRoomButton.click();
        }
    }

    this.clickHotelOption = function () {
        this.hotelsOption.click();
    }

    this.clearOriginField = function () {
        this.originField.clear();
    }

    this.typeOrigin = function (origin) {
        this.originField.sendKeys(origin);
    }

    this.clearDestinationField = function () {
        this.destinationField.clear();
    }

    this.typeDestination = function (destination) {
        this.destinationField.sendKeys(destination);
    }
    this.typeCity = function (destination) {
        this.hotelDestination.sendKeys(destination);
    }

    this.clickMinusButton = function (clickAmount) {
        for (i = 0; i < clickAmount; i++) {
            this.minusButton.click();
        }
    }
    this.clickSearchButton = function () {
       this.searchButton.click();
    }


    /* Get Elements */
    this.getIataLabel = function (iata) {
        //var originIata = element(by.textToBePresentInElement(this.airportLabelLocator, iata));
        var originIata = element(by.cssContainingText(this.originField, iata));
        return originIata;
    }

    this.getCurrentArrivalDate = function () {
        var currentArrivalDate = this.arrivalDate.getText();
        return currentArrivalDate;
    }

    this.getCurrentDepartureDate = function () {
        var currentDepartureDate = this.departureDate.getText();
        return currentDepartureDate;
    }

    this.getSuggestedResultAtPosition = function (position) {
        elementPosition = this.suggestedResultsList.get(position);
        return elementPosition;
    }

    this.getIataFromList = function (airportIata) {
        var resultFromList = element(by.cssContainingText('b.ng-binding', airportIata));
        return resultFromList;
    }

    this.getAirportIataFromSuggestedResultList = function (position) {
        var iata = this.getSuggestedResultAtPosition(position).element(by.css('b.ng-binding'));
        return iata.getText();
    }

    this.getAirportNameFromSuggestedResultList = function (airportName) {
        var fullName = element(by.cssContainingText('span.ng-binding', airportName));
        return fullName;
    }

    this.getIataArrayFromSuggestedResults = function () {
        iataArray = element.all(suggestedResultsListContainer.element(by.css('b.ng-binding')));
        return iataArray;
    }

    this.getRoomAmount = function (amount) {
        var roomAmount = element(by.cssContainingText(this.roomAmountLocator, amount));
        return roomAmount;
    }

    this.getCurrentSystemDate = function () {
        var months = new Array(12);
        months[0] = "Jan";
        months[1] = "Feb";
        months[2] = "Mar";
        months[3] = "Apr";
        months[4] = "May";
        months[5] = "Jun";
        months[6] = "Jul";
        months[7] = "Aug";
        months[8] = "Sep";
        months[9] = "Oct";
        months[10] = "Nov";
        months[11] = "Dec";

        var current_date = new Date();
        month_value = current_date.getMonth();
        day_value = current_date.getDate();
        expectedCurrentDate = months[month_value] + ' ' + day_value;
        return expectedCurrentDate;
    }

    this.getTomorrowSystemDate = function () {
        var months = new Array(12);
        months[0] = "Jan";
        months[1] = "Feb";
        months[2] = "Mar";
        months[3] = "Apr";
        months[4] = "May";
        months[5] = "Jun";
        months[6] = "Jul";
        months[7] = "Aug";
        months[8] = "Sep";
        months[9] = "Oct";
        months[10] = "Nov";
        months[11] = "Dec";

        var current_date = new Date();
        month_value = current_date.getMonth();
        day_value = current_date.getDate() + parseInt(1);
        expectedTomorrowDate = months[month_value] + ' ' + day_value;
        return expectedTomorrowDate;
    }
}
module.exports = TopSearchBarPage;