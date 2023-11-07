// Obj oriented programming exercises
// ES6 version

// Exercise 1 - Classes

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // create a method
    introduce() {
        return `Hi my name is ${this.name} and I am ${this.age} years old`
    }
}


// Exercise 2 - 'this' keyword

// instantiate first object

const person1 = new Person('Solomon', 29)

// create a function that takes callback function as argument

const describePerson = (callback) => {
    return callback.call(person1)
}

console.log(describePerson(person1.introduce));

// Exercise 3 - Promises

// create function that takes a number as argument
// return a promise object
// use setTimeout - 2000 in this exercise
// get resolve value

const wait = (milliseconds) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('I am studying how to manage Promises')
        }, milliseconds)
    })
}

wait(2000)
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.error(error);
    });

// end script




