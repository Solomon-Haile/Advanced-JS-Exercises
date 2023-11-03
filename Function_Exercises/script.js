// Exercise 3 on Functions

// 1. Rewrite it with arrow notation
// replace if else with ternary expression

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Do you have your parents permission to access this page?');
    }
  }

const arrowFun = age => {
    return age > 18 ? true : confirm('Do you have your parents permission to access this page?');
}

//console.log(arrowFun(19));

// 2. Write a function pow(x,n)
// use either fun declaration, expression or arrow

const pow = (x, n) => {
    return x ** n;
}

//console.log(pow(3, 2))

// 3. rewrite function declaration with arrow function
// remove keyword function
// use ternary expression

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no()
// }
  
// ask(
//     "Do you agree?",
//     function() { alert("You agreed.") },
//     function() { alert("You canceled the execution.") }
// )
  

const ask = (question, yes, no) => {
 //confirm(question) ? yes() : no();
}

ask("Do you agree?", () => alert("You agreed."), () => alert("You canceled the execution."))


// 4. Create an object calculator with three methods:
// use this keyword
// assign function to object property

let calculator = {
// Method to read two values from the user and save them as properties
read: function() {
    this.a = (prompt("Enter the first value:"));
    this.b = (prompt("Enter the second value:"));
},

// Method to return the sum of saved values
sum: function() {
    return this.a + this.b;
},

// Method to return the product of saved values
mul: function() {
    return this.a * this.b;
}
};
  
/*calculator.read(); // Prompts for and stores two values
alert("Sum: " + calculator.sum()); // Display the sum
alert("Product: " + calculator.mul()); // Display the product*/

// 5. Write a function which returns the least of two numbers

const min = (a, b) => {
    return a < b ? `The least number is ${a}` : `The least number is ${b}`;
}

//console.log(min(4, -5));
