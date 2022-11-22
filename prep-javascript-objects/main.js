const person = {
  firstName: 'Eric',
  lastName: 'Do',
  hobby: 'fishing'
};

console.log(person); // This function will not output any object properties declared beneath it

const fullName = "This person's name is: " + person.firstName + ' ' + person.lastName;
console.log(fullName);

person.job = 'Mortgage Loan Originator';
const currentJob = person.firstName + ' ' + person.lastName + ' is currently employed as a ' + person.job;
console.log(currentJob);
// Tried it 2 different ways, not sure what best practice would be.

person.previousJob = 'Executive Chef';
// const prevJob = person.firstName + ' ' + person.lastName + ' was previously employed as an ' + person.previousJob;
console.log(person.firstName + ' ' + person.lastName + ' was previously employed as an ' + person.previousJob);

console.log(person); // Output added object properties using dot notation
