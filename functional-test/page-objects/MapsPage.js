var MapsPage = function () {
    this.map = element(by.css('div.angular-google-map'));
    this.mapCalendarWidget = element(by.css('div.user-calendar-widget.tk-proxima-nova.ng-isolate-scope'));
    this.mapCalendarDates = element(by.id('scrollable'));
    this.mapCalendarMonth =element(by.css('span.rotated-text__inner.ng-binding'));
    this.calendar = element(by.css('.calendar'));

    this.selectMonth = function () {
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
module.exports = MapsPage;