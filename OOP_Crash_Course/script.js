// const s1 = 'Hello';
// console.log(typeof s1);
// const s2 = new String('Hello')
// console.log(typeof s2);

// console.log(window)
// console.log(navigator.appVersion)

//Object literal
const book1 = {
    title: 'Book One',
    author: 'Jhon Doe',
    year: '2013',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
};

const book2 = {
    title: 'Book Two',
    author: 'Jane Doe',
    year: '2016',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
};
//console.log(book2.getSummary());
// console.log(Object.keys(book1))
// console.log(Object.values(book2))

// Constructor ES5

// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//     // this.getSummary = function() {
//     //     return `${this.title} was written by ${this.author} in ${this.year}` 
//     // }
// }

// prototypes

// Book.prototype.getSummary = function() {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
// }

//getAge

// Book.prototype.getAge = function() {
//     const years = new Date().getFullYear() - this.year;
//     return `${this.title} is ${years} years old`;
// }

// Revise / change year 
// Book.prototype.revise = function(newYear) {
//     this.year = newYear;
//     this.revised = true; 
// }

// Initialize object
// const book3 = new Book('Book Three', 'Jhon Doe', '2014');
// const book4 = new Book('Book Four', 'Jane Doe', '2019')

//console.log(book3.getSummary()); 
//console.log(book3.getAge())


// megazine constructor

function Megazine(title, author, year, month) {
    // Book.call(this, title, author, year)
    this.month = month;
}

// Megazine.prototype = Object.create(Book.prototype);

// Instantiate mag1 object
const mag1 = new Megazine('Mag One', 'Jhon Doe', '2018', 'Jan');
// Inherit prototype
//console.log(mag1.getSummary());

// Object of Protos

const bookProtos = {
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    },
    getAge: function() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;  
    }
}

// create object
const book5 = Object.create(bookProtos);
book5.title = 'Book Five';
book5.author = 'Jhon Doe';
book5.year = '2021';

//console.log(book5)

// Classes ES6

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}` 
    }

    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;  
    }

    revise(newYear) {
        this.year = newYear;
        this.revised = true; 
    }

    static topBookStore() {
        return 'Barnes & Noble';
    }
}

// Instantiate

const book6 = new Book('Book Six', 'Jhon Doe', '2022');
//console.log(book6)

book6.revise('2023');
//console.log(book6)

//console.log(Book.topBookStore())

// Biography Subclass

class Biography extends Book {
    constructor(title, author, year, month) {
        super(title, author, year)
        this.month = month;
    }
}

const bio1 = new Biography('Biography One', 'Jane Doe', '2012', 'Mar')

console.log(bio1.getSummary())




        







