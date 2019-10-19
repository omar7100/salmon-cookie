// var Hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm',
// '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// var seattle = {
//    min: 23,
//    max: 65,
//    avg: 6.3,
//    cookiesArray: [],
//    Ramdom: function () {
//        var range = this.max - this.min;
//        var rand = Math.floor(Math.random() * range) + this.min;
//        return rand;
//    },
//    amountOfCookiesPerHourFunction: function () {
//        for (i = 0; i < 15; i++) {
//            this.amountOfCookiesCeil = Math.ceil(this.avg * this.Ramdom());
//            this.cookiesArray.push(this.amountOfCookiesCeil);
//        }
//        return this.cookiesArray;
//    },
// }
// seattle.amountOfCookiesPerHourFunction();
// var Tokyo = {
//    min: 3,
//    max: 24,
//    avg: 1.2,
//    cookiesArray: [],
//    Random: function () {
//        var range = this.max - this.min;
//        var rand = Math.floor(Math.random() * range) + this.min;
//        return rand;
//    },
//    amountOfCookiesPerHourFunction: function () {
//        for (i = 0; i < 15; i++) {
//            this.amountOfCookiesCeil = Math.ceil(this.avg * this.Random());
//            this.cookiesArray.push(this.amountOfCookiesCeil);
//        }
//        return this.cookiesArray;
//    },
// }
// Tokyo.amountOfCookiesPerHourFunction();
// var Dubai = {
//    min: 11,
//    max: 38,
//    avg: 3.7,
//    cookiesArray: [],
//    Random: function () {
//        var range = this.max - this.min;
//        var rand = Math.floor(Math.random() * range) + this.min;
//        return rand;
//    },
//    amountOfCookiesPerHourFunction: function () {
//        for (i = 0; i < 15; i++) {
//            this.amountOfCookiesCeil = Math.ceil(this.avg * this.Random());
//            this.cookiesArray.push(this.amountOfCookiesCeil);
//        }
//        return this.cookiesArray;
//    },
// }
// Dubai.amountOfCookiesPerHourFunction();
// var Paris = {
//    min: 20,
//    max: 38,
//    avg: 2.3,
//    cookiesArray: [],
//    Random: function () {
//        var range = this.max - this.min;
//        var rand = Math.floor(Math.random() * range) + this.min;
//        return rand;
//    },
//    amountOfCookiesPerHourFunction: function () {
//        for (i = 0; i < 15; i++) {
//            this.amountOfCookiesCeil = Math.ceil(this.avg * this.Random());
//            this.cookiesArray.push(this.amountOfCookiesCeil);
//        }
//        return this.cookiesArray;
//    },
// }
// Paris.amountOfCookiesPerHourFunction();
// var Lima = {
//    min: 2,
//    max: 16,
//    avg: 4.6,
//    cookiesArray: [],
//    Random: function () {
//        var range = this.max - this.min;
//        var rand = Math.floor(Math.random() * range) + this.min;
//        return rand;
//    },
//    amountOfCookiesPerHourFunction: function () {
//        for (i = 0; i < 15; i++) {
//            this.amountOfCookiesCeil = Math.ceil(this.avg * this.Random());
//            this.cookiesArray.push(this.amountOfCookiesCeil);
//        }
//        return this.cookiesArray;
//    },
// }
// Lima.amountOfCookiesPerHourFunction();
// arrayall = ["seattle", "Tokyo", "Dubai", "Paris", "Lima"];
// arrayall1 = [seattle, Tokyo, Dubai, Paris, Lima];
// for (let j = 0; j < arrayall.length; j++) {
//    var count = 0;
//    document.write("<h2>", "* ", arrayall[j], "</h2>");
//    document.write("<ul>");
//    for (i = 0; i < 15; i++) {
//        count += arrayall1[j].cookiesArray[i];
//        document.write("<li>");
//        document.write(Hours[i], ": ", arrayall1[j].cookiesArray[i], " Cookies.");
//        document.write("<br>");
//        document.write("</li>");
//    }
//    document.write("<li>", "Total : ", count, " Cookies.");
//    document.write("</ul>");
// }

