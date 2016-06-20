// Initializer
var gpbItem = [];
var matCountArray = [];
var matCountArrayTitle = [];
  var pRangeArray = [];
// Initializer


// Question 1


// var priceAvg = function(price) {
//   var priceArray = [];
//   items.forEach(function (itemsArray) {
//     priceArray.push(items.price)
//   });
//   return priceArray;
// };


var prices = items.map(function(item) {
 return item.price;
});

var pricesTotal = prices.reduce(function(a,b) {
return  a + b;
});

var numOfPrices = prices.length;

var avgPrice = function() {
return (pricesTotal / numOfPrices);
};

// Question 1
// ----------
// Question 2


var PriceRange = function(items) {
  items.forEach(function (items){
    if ((items.price >= 14) && (items.price <= 18)) {pRangeArray.push(items.title); }
  });
  return pRangeArray;
}

// Question 2
// ----------
// Question 3


var GPBitem = function (items) {
items.forEach(function(items){
  if (items.currency_code == "GBP") {gpbItem.push(items.price) && gpbItem.push(items.title); }
});
return gpbItem;
}
// Question 3
// ----------
// QUESTION 4



 var madeOfWood = items.map(function(item) {
  return item.materials;
 });


// var madeOfWood = function (items) {
//   var woodItem = [];
//   items.forEach(function(items) {
// if (items.materials == "wood") {woodItem.push(items.title) };
//   });
//   return woodItem;
// }







// QUESTION 4
// ----------
// Question 5


var moreThanEight = function(items) {
  items.forEach(function (items){
    if (items.materials.length >= 8) {matCountArrayTitle.push(items.title) && matCountArray.push(items.materials);}
  });
  return matCountArray + matCountArrayTitle;
};

var eightToString = function(items) {
  matCountArray.reduce(function(a,b){
return (a + " " + b);
});
}


// Question 5
// ----------
// Question 6

var madeBy = function(items) {
  var madeBySeller = [];
  items.forEach(function (items){
    if (items.who_made == "i_did") {madeBySeller.push(1)};
  });
  return madeBySeller.length + " were made by their sellers";
}
// Question 6

// DRAW

moreThanEight(items);
GPBitem(items);
PriceRange(items)

var writeToScreen = function(){
answer1.innerHTML = "The average price is " + "$" +(Math.round(avgPrice(items) * 10)/10)
answer2.innerHTML = pRangeArray[0] + "<br><br>" + pRangeArray[1] + "<br><br>" + pRangeArray[2] + "<br><br>" + pRangeArray[3] + "<br><br>" + pRangeArray[4]
answer3.innerHTML = gpbItem[1] + " costs £" + gpbItem[0];
answer4.innerHTML = (matCountArrayTitle[1] + " has " + matCountArray[1].length + " materials: "  + "<br>" + matCountArray[1]+ "<br><br>" + matCountArrayTitle[0] + " has " + matCountArray[0].length + " materials: "  + "<br>" + matCountArray[0] )
// answer5.innerHTML =
answer6.innerHTML = madeBy(items)
}
window.onload = writeToScreen
