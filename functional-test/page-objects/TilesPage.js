var TilesPage = function () {
    this.tilesGrid = element.all(by.repeater('loc in trip.tilesList'));

    this.tilesTitle = element(by.css("h2.tk-ff-tisa-web-pro"));

    this.themeRepeater = element.all(by.repeater('r in results'));

    //this.firstElement = element.all(by.repeater('r in results')).first();

    this.flightIcon = element.all(by.css('img.flightIcon.pull-right'));

    this.themeList = element.all(by.repeater('theme in results'));


    this.countTilesAndCheckImages = function () {
        count = 0;
        this.tilesGrid.then(function (arr) {
            for (i = 0; i < arr; i++) {
                expect(arr.getText()).toBePresent();
                console.log("Ingrese al FOR");
                count = count + 1;
            }
        });
        if (count > 0) {
            return true;
        } else {
            return false;
        }
    };

// Need to verify this method.
    this.getPageTiles = function() {
        return element.all(by.repeater("loc in tile").column("loc in tileas"));
    };

    this.clickOnTile = function (tileNumber) {
            this.getTile(tileNumber).click();
    };

    this.clickOnTheme = function (themeText) {

        for (i=0; i < themeRepeater.length; i++){
            if (this.themeRepeater.get(i).getText() == themeText){
                this.themeRepeater.get(i).click();
                break;
            }

        }


    };


    /*Get Elements*/
<<<<<<< HEAD
    this.getFirstTile = function () {
         this.tilesGrid.first().then(function(elm) {
             element

         });
=======
    this.getTile = function (tileNumber) {
        return this.tilesGrid.get(tileNumber);
>>>>>>> cedccb7e52f5aff5d13b53cdbded6d9d088bf53f
    }



}
module.exports = TilesPage;