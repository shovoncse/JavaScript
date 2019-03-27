// const person = {
//     name: 'shovon',
//     age: '27'
// }

// console.log(person);
// console.log(person.age);

// Constructor Method / Function

// Person constructor
// function Person(){
//     this.name = 'Shovon'; 
// }

// const shovon = new Person();
// const jhon = new Person();

// console.log(shovon);
// console.log(jhon);

// function Person(name,dob){
//     this.name = name; 
//     // console.log(this);
//     // this.age = age;
//     this.birthday = new Date(dob);
//     this.calAge = function(){
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970 );
//     }
// }

// const shovon = new Person('Shovon', 27);
// const jhon = new Person('Jhon', 28);

// console.log(shovon);
// console.log(jhon);
// console.log(shovon.age);
//const jhon = new Person('Jhon', '8-26-1991');
//console.log(jhon.calAge());

// CLASS 1 ENDS


// String

// const name1 = 'Jeff';
// const name2 = new String('Jeff');

// name2.ss = 'bar';
// console.log(name2);

// console.log(typeof name2);

// if(name1 === 'Jeff'){
//     console.log('YES');
    
// }else{
//     console.log('NO');
   
// }

// if(name2 == 'Jeff'){
//     console.log('YES');
    
// }else{
//     console.log('NO');
// }

// if(name2 === 'Jeff'){
//     console.log('YES');
    
// }else{
//     console.log('NO');
// }

// Number

// const num1 = 5;
// const num2 = new Number(5);

// console.log(num2);
// console.log(typeof num2);

// Boolean
// const bool1 = true;
// const bool2 = new Boolean(true);

// Function
// const getSum1 = function(x, y){
//     return x + y ;
// }

// const getSum2 = new Function('x','y', 'z', 'x + y', 'x');
// console.log(getSum2(1,1));

// Objects
// const jhon = {name : 'jhon'};
// const jhon2 = new Object({name : 'jhon'});

// console.log(jhon2);

//Arrays
// const arr1 = [1,2,3,4];
// const arr2 = new Array(1,2,3,4);

// Regular Expression
// const rel1 = /\w+/;
// const rel2 = new RegExp('\\w+');

// console.log(rel2);

// CLASS 2 ENDS

// PROTOTYPES
// Object.prototype
// Person.prototype

// Person Constructor
// function Person(firstName,lastName,dob){
//         this.firstName = firstName; 
//         this.lastName = lastName; 
//         this.birthday = new Date(dob);
//         //this.calAge = function(){
//             // const diff = Date.now() - this.birthday.getTime();
//             // const ageDate = new Date(diff);
//             // return Math.abs(ageDate.getUTCFullYear() - 1970 );
//         //}
//     }
//     //Get Full name (Declare new Prototype)
//     Person.prototype.getFullName  = function(){
//         return `${this.firstName} ${this.lastName}`;
//     }
//     // calculate age
//     Person.prototype.calAge = function(){
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970 );
//     }

//     // Gets Married
//     Person.prototype.getMaried = function(newLastName){
//         this.lastName = newLastName;
//     }
    
//     const jhon  = new Person('Jhon', 'Doe', '8-12-1990');
//     const mary  = new Person('Mary', 'Johnson', '8-12-1995');

//     console.log(mary);
//     console.log(mary.calAge());
//     console.log(mary.getFullName());
//     mary.getMaried('Ismail');
//     console.log(mary.getFullName());
    
//     console.log(mary.hasOwnProperty('firstName')); // true (Object's own property)
//     console.log(mary.hasOwnProperty('getFullName')); // false (Prototypes Own Property, not Object's Property)
    
    // Class 3 Ends
    // INHERITANCE
    // Person Constructor
    // function Person(firstName, lastName){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }

    // // Greeting
    // Person.prototype.greeting = function(){
    //     return `Hello there ${this.firstName} ${this.lastName}`;
    // }

    // const person1 = new Person('Jhon', 'Doe');
    
    // console.log(person1.greeting());

    // // Customer Constructor
    // function Customer(firstName, lastName, phone, membership){
        
    //     Person.call(this, firstName, lastName); //call() allow us to call another function from somewhere else in the current contex
        
    //     this.phone = phone;
    //     this.membership = membership;


    // }

    // // Inherite the Person Prototype methods
    // Customer.prototype = Object.create(Person.prototype);
    
    // //Make customer.prototype return Customer()
    // Customer.prototype.constructor = Customer; 

    // // create customer
    // const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

    // console.log(customer1);

    // // Customer Greetings
    // Customer.prototype.greeting = function(){
    //     return `Hello There ${this.firstName} ${this.lastName}, Welcome to our company`;
    // }

    // console.log(customer1.greeting());
    
    
// Class 4 Ends

// const personPrototype = {
//     greeting: function(){
//         return `Hello There ${this.firstName} ${this.lastName}`;
//     },
//     getMaried: function(newLastName){
//         this.lastName = newLastName;
//     }
// }

// const mary = Object.create(personPrototype);

// mary.firstName = 'Mary';
// mary.lastName = 'jhonson';
// mary.age = 30;
// mary.getMaried('Isamil');
// // console.log(mary);
// // console.log(mary.greeting());

// const brad = Object.create(personPrototype, {
//     firstName: {value : 'brad'},
//     lastName: {value: 'Traversy'},
//     age: {value: 36}
// });


// console.log(brad.greeting());

// Class 5 Ends
// OOP IN ES6

// class Person {
//     constructor(firstName, lastName, dob){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.birthday =  new Date(dob);
//     }

//     greeting(){
//         return `Hello there ${this.firstName} ${this.lastName}`
//     }

//     calAge(){
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);

//     }

//     getMarried(newLastName){
//         this.lastName = newLastName;
//     }

//     // Static Method 
//     static addNumbers(x,y){
//         return x+y;
//     }
// }

// const mary = new Person('Mary', 'Williams', '11-13-1998');

// mary.getMarried('Thompson');

// // console.log(mary);
// // console.log(mary.addNumbers(1,2)); // Error
// console.log(Person.addNumbers(1,2)); // Actual Class Name

// NEW INHERITANCE ES6 (Subclass -> extend)

class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting(){
        return `Hello There ${this.firstName} ${this.lastName}` ;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership){
        super(firstName, lastName);
        this.phone = phone;
        this.membership = membership;
    }

    static getMembershipCost(){
        return 500;
    }
}

const jhon = new Customer('Jhon', 'Doe', '555-555-5555', 'Standard');

console.log(jhon.greeting());
console.log(Customer.getMembershipCost());



