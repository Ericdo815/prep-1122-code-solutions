function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var addTwoNumbersResults = addTwoNumbers(4, 6);

console.log('addTwoNumbers excercise: ', addTwoNumbersResults);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var convertHoursToMinutesResults = convertHoursToMinutes(4);

console.log('convertHoursToMinutes Excercise: ' + convertHoursToMinutesResults);

function getGreeting(name) {
  return ('Hello ' + name);
}

var getGreetingResult = getGreeting('World');

console.log('getGreeting Excercise: ' + getGreetingResult);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addAndMultiplyBy5Results = addAndMultiplyBy5(4, 9);

console.log('addAndMultiplyBy5 Excercise: ' + addAndMultiplyBy5Results);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var multiplyAndDivideBy5Results = multiplyAndDivideBy5(6, 10);

console.log('multiplyAndDivideBy5 Excercise: ' + multiplyAndDivideBy5Results);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtractTwoNumbersResults = subtractTwoNumbers(100, 45);

console.log('subtractTwoNumbers Excercise: ' + subtractTwoNumbersResults);

function getCircleCircumference(radius) {
  return 2 * π * radius;
}
var π = 3.14159;
var getCircleCircumferenceResults = getCircleCircumference(5);

console.log('getCircleCircumference Excercise: ' + getCircleCircumferenceResults);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var getFullNameResults = getFullName('Eric', 'Do');

console.log('getFullName Excercise: ' + getFullNameResults);

function cube(number) {
  return number * number * number;
}

var cubeResults = cube(10);

console.log('cube Excercise: ' + cubeResults);
