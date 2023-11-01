// Exercises on ECMAScript 6
// Exercise 1

let user = {
    name: "John",
    years: 30
};

// Write the destructuring assignment that reads:

// name property into the variable name.
// years property into the variable age.
// isAdmin property into the variable isAdmin (false if absent)

const {name, years: age, isAdmin = false} = user; // reads name, years and isAdmin prop on user obj
//console.log(age, name, isAdmin);

// Exercise 2
const ourPlanet = 'Earth';     // naming with const for constant var
let userName = '';            // use let keyword & reassign username


// Exercise 3 

let phrase = "Hello";

if (true) {
  let user = "John";
  function sayHi() {
    alert(`${phrase}, ${user}`)
  }
}

//sayHi();

// We will see 'Hello John' as an alert 
// condition in if statement is true 
// we used global scoped var phrase
// we used local scoped var user

// Exercise 4

// 4.1 Create an empty object user 
const userTwo = {};

// 4.2 Add the property name with the value John

userTwo.name = 'John';

//console.log(name);         //check it out

// 4.3 Add the property surname with the value Smith

userTwo.surname = 'Smith';

//console.log(surname);         //check it out

// 4.4 Change the value of the name to Pete 

userTwo.name = 'Pete'; 

//console.log(name);   // stil i get jhon - can't change const property

// 4.5 Remove the property name from the object
delete userTwo.name;

//console.log(userTwo.name);    


//Exercise 5
//Is it possible to change an object declared with const, how do you think and why?


const user3 = {
  name: "John"
}

// does it work?
user3.name = "Pete"

//console.log(user3.name); Yes it worked - it is possile to change property - but not redclare

// Exercise 6

// declare var to hold sum
// use for in loop 

let salaries = {
    Fred: 100,
    Ted: 160,
    Ghaith: 130
}

let sum = 0;

for(prop in salaries) {
    sum += salaries[prop];
}

//console.log(sum);

// Exercise 7
// use ternary operator
if (a + b < 4) {
    result = 'Below';
} else {
    result = 'Over';
}  
reult = a + b < 4 ? 'Below' : 'Over';

// Exercise 8
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

message = login == 'Employee' ? 'Hello' : login == 'Director' ? 'Greetings' : login == '' ?  'No login' : '';