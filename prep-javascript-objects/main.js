const person = {
  firstName: 'Eleanor',
  lastName: 'Roosvelt',
  hobby: 'Saving the world'
};
console.log(person);

const fullName = 'The person\'s full name is: ' + person.firstName + ' ' + person.lastName;
console.log(fullName);

person.job = 'Humanitarian';
console.log('The person\'s current job is: ' + person.job);

person.previousJob = 'First Lady';
console.log('The person\'s previous job is: ' + person.previousJob);

console.log(person);
