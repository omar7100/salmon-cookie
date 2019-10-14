'use strict';
var Hours = [ ' 6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var storeLocations = [];
var salesTable = document.getElementById('TableSalmon');
function HeaderRow() {
var Tablerow = document.createElement('tr');
for (var i = 0; i <= Hours.length; i++) {
  var element = document.createElement('th');
  element.textContent = Hours[i-1];
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

Store.prototype.numCustHourly = function() {
for (var i = 0; i <= Hours.length; i++) {
  var singleHourCust = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  this.avgCustArray.push(singleHourCust);
}

};

Store.prototype.cookiesPerCustomer = function() {
this.numCustHourly();
for (var i = 0; i < Hours.length; i++) {
  var singleHourCookies = Math.ceil(this.avgCustArray[i] * this.avgCookie);
  this.cookiesEachHourArray.push(singleHourCookies);
  this.totalCookies += singleHourCookies;
}

};
Store.prototype.render = function() {
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


var Seattle = new Store('Seattle', 2, 16, 4.6);
var Tokyo = new Store('Tokyo', 3, 24, 1.2);
var Dubai = new Store('Dubai' , 11, 38, 3.7);
var Paris = new Store('Paris', 20, 38, 2.3);
var Lima = new Store('Lima', 23, 65, 6.3);
function renderAllStores() {
for (var i = 0; i < storeLocations.length; i++) {
  storeLocations[i].render();
}
};

function makeFooterRow() {
var Tablerow = document.createElement('tr');
Tablerow.textContent = 'Total';
salesTable.appendChild(Tablerow);
var bigStupidTotal = 0;
for (var i = 0; i < Hours.length; i++) {
  var hourlyTotal = 0;
  for (var j = 0; j < storeLocations.length; j++) {
    hourlyTotal = hourlyTotal + storeLocations[j].cookiesEachHourArray[i];
    bigStupidTotal += storeLocations[j].cookiesEachHourArray[i];
    console.log(bigStupidTotal);
  }
  var tdElement = document.createElement('td');
  tdElement.textContent = hourlyTotal;
  Tablerow.appendChild(tdElement);
}
tdElement = document.createElement('td');
tdElement.textContent = bigStupidTotal;
Tablerow.appendChild(tdElement);
};
HeaderRow();
renderAllStores();
makeFooterRow();