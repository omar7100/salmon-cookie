'use strict';

var Hours = [' 6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var storeLocations = [];

var container = document.getElementById('TableSalmon');

var salesTable = document.createElement('table');
container.appendChild(salesTable);

function HeaderRow() {
    var Tablerow = document.createElement('tr');
    for (var i = 0; i <= Hours.length; i++) {
        var element = document.createElement('th');
        element.textContent = Hours[i - 1];
        Tablerow.appendChild(element);
    }
    element = document.createElement('th');
    element.textContent = 'Daily Location Total';
    Tablerow.appendChild(element);
    salesTable.appendChild(Tablerow);
};

function Store(name, minCust, maximumCust, avarageCookies) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maximumCust;
    this.avgCookie = avarageCookies;
    this.avgCustArray = [];
    this.cookiesEachHourArray = [];
    this.totalCookies = 0;
    storeLocations.push(this);
}
////=hours.length
Store.prototype.numCustHourly = function () {
    for (var i = 0; i < Hours.length; i++) {
        var singleHourCust = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
        this.avgCustArray.push(singleHourCust);
    }

};

Store.prototype.cookiesPerCustomer = function () {
    this.numCustHourly();
    for (var i = 0; i < Hours.length; i++) {
        var singleHourCookies = Math.ceil(this.avgCustArray[i] * this.avgCookie);
        this.cookiesEachHourArray.push(singleHourCookies);
        this.totalCookies += singleHourCookies;
    }

};
Store.prototype.render = function () {
    this.cookiesPerCustomer();
    var trRowName = document.createElement('tr');
    var tdStore = document.createElement('td');
    tdStore.textContent = this.name;
    trRowName.appendChild(tdStore);


    for (var i = 0; i < this.cookiesEachHourArray.length; i++) {
        var tdCell = document.createElement('td');
        tdCell.textContent = this.cookiesEachHourArray[i];
        trRowName.appendChild(tdCell);
    };

    var tdTotal = document.createElement('td');
    tdTotal.textContent = this.totalCookies;
    trRowName.appendChild(tdTotal);
    salesTable.appendChild(trRowName);
};


var Seattle = new Store('Seattle', 23, 65, 6.3);
var Tokyo = new Store('Tokyo', 3, 24, 1.2);
var Dubai = new Store('Dubai', 11, 38,3.7);
var Paris = new Store('Paris', 20, 38, 2.3);
var Lima = new Store('Lima', 2, 16, 4.6);

function renderAllStores() {
    for (var i = 0; i < storeLocations.length; i++) {
        storeLocations[i].render();
    }
};
var footerRow;
function makeFooterRow() {
    var Tablerow = document.createElement('tr');
    footerRow = Tablerow;
    Tablerow.textContent = 'Total';
    salesTable.appendChild(Tablerow);
    var bigStupidTotal = 0;

    for (var i = 0; i < Hours.length; i++) {
        var hourlyTotal = 0;

        for (var j = 0; j < storeLocations.length; j++) {
            hourlyTotal = hourlyTotal + storeLocations[j].cookiesEachHourArray[i];
            console.log(hourlyTotal);
        }
        var tdElement = document.createElement('td');
        Tablerow.appendChild(tdElement);
        tdElement.textContent = hourlyTotal;
        bigStupidTotal += hourlyTotal;
    }
    tdElement = document.createElement('td');
    Tablerow.appendChild(tdElement);
    tdElement.textContent = bigStupidTotal;
};

HeaderRow();
renderAllStores();
makeFooterRow();

// function Store(name, minCust, maximumCust, avarageCookies) {
//   this.name = name;
//   this.minCust = minCust;
//   this.maxCust = maximumCust;
//   this.avgCookie = avarageCookies;
//   this.avgCustArray = [];
//   this.cookiesEachHourArray = [];
//   this.totalCookies = 0;
//   storeLocations.push(this);
// }
function submitHandler(event) {
  event.preventDefault();
  
  var locationName = event.target.location.value;
  var min = parseInt(event.target.min.value);
  var max = parseInt(event.target.max.value);
  var avgSales = parseFloat(event.target.avgSales.value);

  var newShop = new Store(locationName, min, max, avgSales);

  // shops.push(newShop);
  storeLocations.push(newShop);


  salesTable.removeChild(footerRow);

  newShop.render(salesTable);

  makeFooterRow();

}



var form = document.getElementById('addShopForm');
form.addEventListener('submit', submitHandler);
