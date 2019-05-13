//comment
//logging
console.log('hello');

//variable
let name = 'Mathias Ness';
console.log(name);
//cannot be a reserved keyword
//should be meaningful
//cannot start with a number
//cannot contain a space og a hyphen (-)
let firstName = 'mathias';
let lastName ='Ness';
console.log(firstName);
console.log(lastName);

//constants (cannot change)
const interestRate = 0.3;
console.log(interestRate);

//value types og reference types
//value
let Name = 'Mathias Ness' // String Literal
let age = 17; // Number Literal
let isApproved = true; // Boolean Literal
let middleName = undefined; // Undefined
let selectedColor = null; // Removes Previous Variable

//reference
//Object
let person = {
  navn: 'Mathias Ness',
  Alder: 17
}; //Object

//dot notation
person.navn = 'john';
console.log(person);

//Array
let valgteFarger = ['red', 'blue', 'yellow'];
valgteFarger[3] = 4;
console.log(valgteFarger)

//Function (performing a task)
function greet(kalleNavn, etterNavn) {
  console.log('hello ' + kalleNavn + ' ' + etterNavn);
}
greet('Matti', 'Ness');
greet('Matta', 'Hop');

//function (calculating a value)
Function square(nummer) {
  return nummer * nummer;
}

console.log(square(2));
