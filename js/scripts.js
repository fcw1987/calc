// //adding
// var add = function(number1, number2) {
//   return number1 + number2;
// };
//
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// var result = add(number1, number2);
// alert(result);
//
//
//
// var subtract = function(number1, number2) {
//   return number1 - number2;
// };
//
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// var result = subtract(number1, number2);
// alert(result);
//
//
//
// var multiply = function(number1, number2) {
//   return number1 * number2;
// };
//
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// var result = multiply(number1, number2);
// alert(result);
//
//
//
// var division = function(number1, number2) {
//   return number1 / number2;
// };
//
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// var result = division(number1, number2);
// alert(result);
//
//
// var temp = function(number1) {
//   return number1 - 32 * 5/9;
// };
//
// var number1 = parseInt(prompt("Enter a number:"));
// var result = temp(number1);
// alert(result);


var bmi = function(height, weight) {
  return weight / (height * 2)
}

var height = parseFloat(prompt("what is your height in meters?"))
var weight = parseFloat(prompt("how much do you weigh in kg?"))
var result = bmi(height, weight);
alert(result);
