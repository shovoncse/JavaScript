//Test 
//alert(123);

// Single line comment

/* Multi Line Comment */

/* ======= Uncomment From here

// Log to Console
console.log('Hello WOrld');
console.log(123);
console.log(true);

//Log From Variable
var greeting = 'Hello';
console.log(greeting);

//Array
console.log([1,2,3,4,5]);
console.table([1,2,3,4,5]);

//Object
console.log({a:1, b:2});
console.table({a:1, b:2});

// Error & Warning
console.error("Hello Error");
console.error("Hello Error");

// Execution Time Count
console.time('count');
    console.log("Task One");
    console.log("Task Two");
    console.log("Task Three");
    console.log("Task Four");
console.timeEnd('count');

//Console Clear
console.clear();

=========== To There */ 

/* ======================
        VARIABLE
=========================*/
// var , let , const

/* VAR */
/*
var name = 'Jhon Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

//Init Var
var greeting;
console.log(greeting);
greeting = 'hello';
console.log(greeting);

//Letters, Numbers, _, $
// Cann't start with number

// Multi Word vars

var firstName = 'Jhon'; // Camel case
var first_name = 'Sara'; // underscore
var FirstName = 'Sara'; // Pascal Case
var firstname = 'abc'; //(Not Recommanded)
*/

/* LET */
// let name;
// name = 'Jhon Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

/* CONST */
// const name;
// const name = 'Jhon';
// name = 'Jhon Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// const person = {
//     name: 'Jhon',
//     age : 26
// }

// console.log(person);
// person.name = 'sara' ; //Mutating
// console.log(person);

// const numbers = [1,2,3,4,5];
// console.log(numbers);

// numbers.push(6); // Mutating
// console.log(numbers);

// numbers = [1,2,5,7]; //error

/* ======================
        DATATYPES
=========================*/
//Dynamic type language

//PRIMITIVE

//String
const name = 'Jhon Doe';
console.log(typeof name);

//Number
const age = 12;
console.log(typeof age);

//Boolean
const hasKid = true;
console.log(typeof hasKid);

//Null
const car = null;
console.log(typeof car); // Bug

//undefined
let test;
console.log(typeof test); 

//Symbol
const sym = Symbol();
console.log(typeof sym);

// REFERENCE TYPES - Objects

// Array
const hobbis = ['movies', 'music'];
console.log(typeof hobbis);

//Object Literal
const address = {
    city: 'Khulna',
    state: 'South'
}
console.log(typeof address);

const today = new Date();
console.log(today);
console.log(typeof today);