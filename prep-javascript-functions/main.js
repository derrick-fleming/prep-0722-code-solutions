function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
var sum = addTwoNumbers(2, 2);
console.log('addTwoNumbers exercise:', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var convertedHours = convertHoursToMinutes(2);
console.log('convertHoursToMinutes exercise:', convertedHours);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

var getGreetingResult = getGreeting('World');
console.log('getGreeting exercise:', getGreetingResult);

function addAndMultipyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addAndMultiplyBy5Result = addAndMultipyBy5(10, 5);
console.log('addAndMultiplyBy5 exercise:', addAndMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 exercise:', multiplyAndDivideBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers exercise:', subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var getCircleCircumferenceResult = getCircleCircumference(5);
console.log('getCircleCircumference exercise:', getCircleCircumferenceResult);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var getFullNameResult = getFullName('Juan', 'Ramirez');
console.log('getFullName exercise:', getFullNameResult);

function cube(number) {
  return number * number * number;
}

var cubeResult = cube(5);
console.log('cube exercise: ', cubeResult);
