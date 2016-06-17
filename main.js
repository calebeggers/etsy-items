var itemPrices = items.map(function(object) {
	return object.price;
	});

//=====================================================================================================================================================
//Problem One: Average
//=====================================================================================================================================================

var itemPricesSum = itemPrices.reduce(function(a, b) {
    return a + b;
});

var itemPricesAvg = Math.round(((itemPricesSum / itemPrices.length)) * 100) / 100;

document.getElementById("answer-1").textContent = "The average price is: $" + itemPricesAvg;

//=====================================================================================================================================================
//Problem Two: Price range
//=====================================================================================================================================================

var filtered = items.filter(function(item) {
	return item.price < 18 && item.price > 14;
})

var priceRange = filtered.map(function(object) {
	return object.title;
})

document.getElementById("answer-2").textContent = "Items that cost between $14 and $18 are: " + priceRange;

//=====================================================================================================================================================
//Problem Three: Item that costs fake money
//=====================================================================================================================================================

var gbpItem = items.filter(function (item) {
	return item.currency_code == "GBP";
})

var currencyCodeTitle = gbpItem.map(function(object) {
	return object.title;
})

var currencyCode = gbpItem.map(function(object) {
	return object.price;
})

document.getElementById("answer-3").textContent = currencyCodeTitle + " costs £" + currencyCode;

//=====================================================================================================================================================
//Problem Four: Items made of wood
//=====================================================================================================================================================

var woodItems = items.filter(function (item) {
	return item.materials.indexOf ("wood") > -1;
})

var woodThings = woodItems.map(function(object) {
	return object.title;
})

document.getElementById("answer-4").textContent = woodThings;

//=====================================================================================================================================================
//Problem Five: Things made of 8 other things
//=====================================================================================================================================================

var moreThan = items.filter(function (item) {
	return item.materials.length >= 8;
})

var builtOf = moreThan.map(function(object) {
	return object.title;
})

document.getElementById("answer-5").textContent = builtOf;

//=====================================================================================================================================================
//Problem Six: Who made it?
//=====================================================================================================================================================

var uniqueItem = items.filter(function (item) {
	return item.who_made == "i_did"
})

document.getElementById("answer-6").textContent = uniqueItem.length + " were made by their sellers";

