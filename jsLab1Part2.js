// The distance of the trip, in total, is 1,500 miles.
// Your car’s fuel efficiency is as follows:
// At 55 miles per hour, you get 30 miles per gallon.
// At 60 miles per hour, you get 28 miles per gallon.
// At 75 miles per hour, you get 23 miles per gallon.
// You have a fuel budget of $175.
// The average cost of fuel is $3 per gallon.
// 55=30 60=28 75=23 , b-$175 , avg f $3
//How many gallons of fuel will you need for the entire trip?
// Will your budget be enough to cover the fuel expense?
// How long will the trip take, in hours?

// Compare the results when traveling at an average of 55, 60, and 75 miles per hour.
//  Which makes the most sense for the trip?

//The initial numbers that must be verified.
const totaltrip = 1500;
const totalbudget = 175;
const fuelcost = 3;
var  totalfuel = (totalbudget/fuelcost);
console.log("Total available fuel for $175  (fuel cost $3 per/gallon) : " + totalfuel + "\n");
// travelling with 55 avg speed detaits
console.log("travelling with 55 avg speed detaits \n");
console.log("=====================================");
console.log("How many gallons of fuel will you need for the entire trip? : " + (totaltrip/30)  + "\n");
var budjetenough = ((totaltrip/30)*3) < 175;
console.log("Will your budget be enough to cover the fuel expense? : " + budjetenough + "\n");
console.log("How long will the trip take, in hours? : " + totaltrip / 55 + "\n");
// travelling with 60 avg speed detaits
console.log("travelling with 60 avg speed detaits \n");
console.log("=====================================");
console.log("How many gallons of fuel will you need for the entire trip? : " + (totaltrip/28)  + "\n");
var budjetenough = ((totaltrip/28)*3) < 175;
console.log("Will your budget be enough to cover the fuel expense? : " + budjetenough + "\n");
console.log("How long will the trip take, in hours? : " + totaltrip / 60 + "\n");
// travelling with 75 avg speed detaits
console.log("travelling with 60 avg speed detaits \n");
console.log("=====================================");
console.log("How many gallons of fuel will you need for the entire trip? : " + (totaltrip/23)  + "\n");
var budjetenough = ((totaltrip/23)*3) < 175;
console.log("Will your budget be enough to cover the fuel expense? : " + budjetenough + "\n");
console.log("How long will the trip take, in hours? : " + totaltrip / 75 + "\n");