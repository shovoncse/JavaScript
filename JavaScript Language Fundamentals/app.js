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
/*
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

*/

/* ==============
 TYPE CONVERSION 
 ================*/
// let val;

// // To String
// val = 5;

// Output
// console.log(val);
// console.log(typeof val);
// console.log(val.length); // Only Works On String

// Number to String
// val = String(5);
// val = String(5555);
// val = String(5+5);
// // Bool to String
// val = String(true);
// // Date to String
// val = String(new Date());
// // Array to String
// val = String([1,2,3,4]);

// // toString() like c#
// val = (5).toString();
// val = (true).toString();


// String to numbers
// val = Number('5');

// // Boolean to Number
// val = Number(true);
// val = Number(false);

// //Null to Number
// val = Number(null);

// val = Number('Hello'); // NaN
// val = Number([1,2,3,4]); // NaN

// val = parseInt('100.30');
// val = parseFloat('100.31');

// console.log(val);
// console.log(typeof val);
// console.log(val.length); // Only Works On String
// console.log(val.toFixed()); // Only Works On Number

// const val1 = 5;
// const val1 = '5';
// const val2 = 6;
// const sum = val1 + val2;

// console.log(sum);
// console.log(typeof sum);


// const num1 = 100;
// const num2 = 50;
// let val;

// //Simple math with numbers
// val = num1 + num2
// val = num1 * num2
// val = num1 - num2
// val = num1 / num2
// val = num1 % num2

// // Math object
// val = Math.PI; 
// val = Math.E; 
// val = Math.round(2.4); 
// val = Math.ceil(2.4); 
// val = Math.floor(2.4); 
// val = Math.sqrt(64); 
// val = Math.abs(-2); 
// val = Math.pow(4,2); 
// val = Math.min(4,2,-1,5,7,22,1,-9); 
// val = Math.max(4,2,-1,5,7,22,1,-9); 
// val = Math.random(); 
// val = Math.random() * 20 + 1; // 1-20 Decimal

// val = Math.floor(Math.random() * 20 + 1); 


// console.log(val);

const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Shovon Das';
const tags = 'web design,web development, graphics, programming' ;
let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;
// Append
val = 'Shovon ';
val += 'Das';
val = 'Hello, My name is '+firstName+' and I am '+age;

// Escaping
val = "That's Awesome, I Can't wait";
val = 'That\'s Awesome, I Can\'t wait';

// Length
val = firstName.length;

// concat()
val = firstName.concat(' ',lastName);

//Change Case
val =firstName.toUpperCase();
val =firstName.toLowerCase();

//String Like Array
val = firstName[0]; // w
val = firstName[1]; // i

// IndexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

// charAt()
val = firstName.charAt('2');

// Get Last char
val = firstName.charAt(firstName.length -1);

// SubString()
val = firstName.substring(0,4); // string from 0 to 4

// Slice() // mostly used in arrays
val = firstName.slice(0,4); // Similier substring()
val = firstName.slice(-3);

//split()
val = str.split(' ');
val = tags.split(',');

//Replace
val = str.replace('Shovon', 'Brad')

// Includes()
val = str.includes('Shovon'); // true
val = str.includes('shovon'); // false

console.log(val);




