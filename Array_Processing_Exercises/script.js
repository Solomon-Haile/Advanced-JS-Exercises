// Exercises 2 
// Adavanced JS - Array Processing 

// 1. return a filterd array

// use filter method

function filterRange(arr,a,b) {
 return arr.filter((e) => {
    return e >= a && e <=b;
 })
}

let arr = [5, 3, 8, 1]

let filtered = filterRange(arr, 1, 4)

//console.log(filtered)

// 2. array of names
// use map method
// return array of names from users array

let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 } 
let mary = { name: "Mary", age: 28 }

let users = [ john, pete, mary ]

let names = users.map((user) => {
    return user.name;
})

//console.log(names)

// 3. find average age of user objects

// use reduce method - find total age
// divide it by lenth of array

function  getAverageAge(users) {

    const totalAge = users.reduce((accumulator,user) => {
        return accumulator + user.age;
    }, 0)

    return totalAge / users.length;
};

let john2 = { name: "John", age: 25 }
let pete2 = { name: "Pete", age: 30 }
let mary2 = { name: "Mary", age: 29 }

let arr2 = [ john2, pete2, mary2 ]

console.log(getAverageAge(arr2))
