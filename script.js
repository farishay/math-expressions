

// js assignment 5 math expression 

// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

let num1 = 3;
let num2 = 6;

let sum = num1 + num2;
document.writeln("ans :1 <br>" + "The sum of " + num1 + " and " + num2 + " is: " + sum + "<br>" + "<br>");


// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.
let subtraction = num1 - num2;
document.writeln("<b> ans :2 </b> <br> ");

document.writeln("<b> The subtraction of </b> " + " "+ num1 + " and " + num2 + " is: " + subtraction + "<br> " + "<br>");

let multiplication = num1 * num2;
document.writeln("<b> The multiplication of </b>" +" "+ num1 + " and " + num2 + " is: " + multiplication + "<br>" + "<br>");

let division = num1 / num2;
document.writeln( "<b> The division of </b> " + num1 + " and " + num2 + " is " + division + " <br> " + " <br> ");

let modulus = num1 % num2;
document.writeln(" <b> The modulus of </b>" + num1 + " and " + num2 + " is: " + modulus + "<br>");
document.writeln("<br>");


// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.


document.writeln("<b> ans :3 </b> <br>");
// a. Declare a variable.
let variable;

// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
document.writeln("Value after variable declaration is: " + variable + "<br>");

// c. Initialize the variable with some number.
variable = 1;


// d. Show the value of variable in your browser like “Initial
// value: 5”.
variable = 5;
document.writeln("Initial value:"  + variable + " <br> ")

// e. Increment the variable.
variable++;

// f. Show the value of variable in your browser like “Value
// after increment is: 6”
document.writeln("Value after increment is: " + variable + "<br>");


// g. Add 7 to the variable.
variable += 7;
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
document.writeln("Value after addition is: " + variable + "<br>");


// i. Decrement the variable.
variable--;
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
document.writeln("Value after decrement is: " + variable + "<br>");

// k. Show the remainder after dividing the variable’s value
// by 3.

let remainder = variable % 3;

// l. Output : “The remainder is : 0”.
document.writeln("The remainder is: " + remainder + "<br>");
document.writeln("<br>");

document.writeln("<br>");

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets to a movie.

let ticketPrice = 600;
let numberOfTickets = 5;
let totalCost = ticketPrice * numberOfTickets;
document.writeln("<b> ans :4 </b> <br>");
document.writeln("Total cost to buy " + numberOfTickets + " tickets to a movie is: " + "<b>"+ totalCost +"</b>" + " PKR" + "<br>");
document.writeln("<br>");


// 5. Write a script to display multiplication table of any
// number in your browser.

let number = 5;
document.writeln("<b> ans :5 </b> <br>");
document.writeln("Multiplication table of " + number + ": <br>");

    document.writeln(number + " x " + 1 + " = " + (number * 1) + "<br>");
    document.writeln(number + " x " + 2 + " = " + (number * 2) + "<br>");
    document.writeln(number + " x " + 3 + " = " + (number * 3) + "<br>");
    document.writeln(number + " x " + 4 + " = " + (number * 4) + "<br>");
    document.writeln(number + " x " + 5 + " = " + (number * 5) + "<br>");
    document.writeln(number + " x " + 6 + " = " + (number * 6) + "<br>");
    document.writeln(number + " x " + 7 + " = " + (number * 7) + "<br>");
    document.writeln(number + " x " + 8 + " = " + (number * 8) + "<br>");
    document.writeln(number + " x " + 9 + " = " + (number * 9) + "<br>");
    document.writeln(number + " x " + 10 + " = " + (number * 10) + "<br>");

document.writeln("<br>");

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

let celsius = 15;
let fahrenheit = (celsius * 9/5) + 32; 
document.writeln("<b> ans :6 </b> <br>");
document.writeln(celsius + "°C is " + fahrenheit + "°F" + "<br>");

fahrenheit = 30; 
celsius = (fahrenheit - 32) * 5/9; 

document.writeln(fahrenheit + "°F is " + celsius + "°C" + "<br>");
document.writeln("<br>");

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables

// MATH EXPRESSIONS | JAVASCRIPT

// Page 5 of 9

// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// Compute the total cost & show the receipt in your browser.

let priceItem1 = 350;
let priceItem2 = 100;   
let quantityItem1 = 3;
let quantityItem2 = 5;
let shippingCharges = 200;
let totalCost2 = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;
document.writeln("<b> ans :7 </b> <br>");
document.writeln("Price of item 1 is: " + priceItem1 + "<br>");
document.writeln("Quantity of item 1 is: " + quantityItem1 + "<br>");
document.writeln("Price of item 2 is: " + priceItem2 + "<br>");
document.writeln("Quantity of item 2 is: " + quantityItem2 + "<br>");
document.writeln("Shipping Charges: " + shippingCharges + "<br >");
document.writeln("<b> Total cost of your order is: " + totalCost2 + "</b>" + "<br>");
document.writeln("<br>");     

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

let totalMarks = 500;
let marksObtained = 444;
let percentage = (marksObtained / totalMarks) * 100;
document.writeln("<b> ans :8 </b> <br>");
document.writeln("Total Marks: " + totalMarks + "<br>");
document.writeln("Marks Obtained: " + marksObtained + "<br>");
document.writeln("Percentage: " + percentage + "%" + "<br>");
document.writeln("<br>");


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

let usDollar = 10;
let saudiRiyal = 25;
let totalInPKR = (usDollar * 104.80) + (saudiRiyal * 28);
document.writeln("<b> ans :9 </b> <br>");
document.writeln("Total currency in PKR: " + totalInPKR + "<br>");
document.writeln("<br>");


// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

let initialNumber = 10;
let result = ((initialNumber + 5) * 10) / 2;
document.writeln("<b> ans :10 </b> <br>");
document.writeln("The result of the arithmetic operations is: " + result + "<br>");
document.writeln("<br>");

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// Output them to the screen like so: “They are either NN or NN
// years old”.

let currentYear =2025 

let birthYear = 2004
let age1 = currentYear - birthYear;
let age2 = age1 - 1;
document.writeln("<b> ans :11 </b> <br>");
document.writeln("Current Year: " + currentYear + "<br>");
document.writeln("Birth Year: " + birthYear + "<br>");
document.writeln("They are either " + age1 + " or " + age2 + " years old." + "<br>");
document.writeln("<br>");



// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

let radius = 20;
let pi = 3.142;
let circumference = 2 * pi * radius;
let area = pi * radius * radius;
document.writeln("<b> ans :12 </b> <br>");
document.writeln("Radius of the circle: " + radius + "<br>");
document.writeln("Value of pi: " + pi + "<br>");
document.writeln("The circumference is: " + circumference + "<br>");
document.writeln("The area is: " + area + "<br>");
document.writeln("<br>");


// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.


let favoriteSnack = "chocolate cake";
let currentAge = 21;
let maxAge = 65;
let estimatedAmountPerDay = 3;

let totalNeeded = (maxAge - currentAge) * estimatedAmountPerDay ; 
document.writeln("<b> ans :13 </b> <br>");
document.writeln("Favorite Snack: " + favoriteSnack + "<br>");
document.writeln("Current Age: " + currentAge + "<br>");
document.writeln("Maximum Age: " + maxAge + "<br>");
document.writeln("Estimated Amount Per Day: " + estimatedAmountPerDay + "<br>");
document.writeln("You will need " + totalNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + "." + "<br>");
document.writeln("<br>");

document.writeln("ASTALA VISTA");