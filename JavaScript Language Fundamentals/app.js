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

/*
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

*/


// const name = 'Jhon';
// const age = 30;
// const job = 'Web Developer';
// const city = 'Miami';
// let html;

// //Without Template String
// html = '<ul><li>Name: '+name+'</li><li>age: '+age+'</li><li>Job: '+job+'</li><li>City: '+city+'</li></ul>';
// html = '<ul>'+
//             '<li>Name: '+name+'</li>'+
//             '<li>age: '+age+'</li>'+
//             '<li>Job: '+job+'</li>'+
//             '<li>City: '+city+'</li>'+
//         '</ul>';


// function hello(){
//     return 'Hello';
// }
// //With template String (es6)
// html = `
//     <ul>
//         <li>Name: ${name}</li>
//         <li>Age: ${age}</li>
//         <li>Job: ${job}</li>
//         <li>City: ${city}</li>
//         <li>${4+6}</li>
//         <li>${Math.PI}</li>
//         <li>${hello()}</li>
//         <li>${age > 30 ? 'Over 30': 'Under 30'}</li>
//     </ul>

// `;

// document.write(html);


/* ===================
        ARRAY
======================*/
// const number = [43,44,33,22,5];
// const numbers = new Array(22,33,44,5,22);
// const fruit = ['apple', 'bannana', 'Orange', 'Pear'];
// const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date() ];

// let val;

// // Get Array Length
// val = numbers.length;
// // Check if is array
// val = Array.isArray(numbers);
// // Get single value
// val = numbers[3];
// val = number[0];
// // Insert Into Array
// number[0] = 100;
// // index of a value
// val = number.indexOf(100);

//MUTATING ARRAY
// // Add on to the end
// number.push(250);
// // Add on to the front 
// number.unshift(250);
// // Take of from End
// number.pop();
// // Take of from front
// number.shift();
// // Splice values
// number.splice(1,3);
// // Reverse 
// number.reverse();
// // Concatenate arrays
// val = number.concat(numbers);
// // Sort Arrays
// val = fruit.sort(); 
// val = number.sort(); 

// // Use the 'compare fnction'
// val = number.sort((x,y) => y - x);
// // Reverse Sort
// val = number.sort((x,y) => x - y);

// Find
// let under50 = (num) => num < 50;
// let over50 = (num) => num > 50;
// val = number.find(under50);
// val = number.find(over50);

// console.log(number);
// console.log(val);


/* OBJECT LITERAL */
// const person = {
//     firstNAme: 'Indra',
//     lastName: 'smith',
//     age: 30,
//     email: 'steve@hotmail.com',
//     hobbies: ['music','sports'],
//     address: {
//         city: 'Miami',
//         state: 'Florida'
//     },
//     getBirthYear: function(){ return 2019 - this.age}
// };

// let vat;
// val = person;

// // Get Specfic Value
// val = person.firstNAme;
// val = person['firstNAme'];
// val = person.age;
// val = person.email;
// val = person.hobbies;
// val = person.hobbies[1];
// val = person.address.state; 
// val = person.address['state'];
// val = person.getBirthYear();

// console.log(val);


// const people = [
//     { name: 'Jhon', age: 30},
//     { name: 'Mike', age: 27},
//     { name: 'boby', age: 49}
// ];

// // console.log(people[0]);
// // console.log(people.length);

// for(let i =0; i < people.length; i++){
//     console.log(people[i].name);
    
// }

/* ==================
    DATE TIME 
====================*/
// let val;
// const today = new Date();
// let birthday = new Date('9-10-1991');
// birthday = new Date('9-10-1991 11:33:00');
// birthday = new Date('February 10 1993');
// birthday = new Date('2-10-1993');
// birthday = new Date('2/10/1993');


// val = today;
// val = birthday;
// val = today.getMonth();
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime();

// birthday.setDate(26);
// birthday.setMonth(7);
// birthday.setFullYear(1991);
// birthday.setHours(8);
// birthday.setMinutes(22);


// // console.log(typeof val);

// console.log(birthday);

/*=====================
 CONDITIONAL STATEMENT 
===================== */

const id = 100;
// EQUAL TO
// if(id == 100){
//     console.log('CORRECT');
// }else{
//     console.log('INCORRECT');
// }

// NOT EQUAL TO
// if(id != 101){
//     console.log('CORRECT');
// }else{
//     console.log('INCORRECT');
// }

// // EQUAL VALUE & TYPE
// if(id === 100){
//     console.log('CORRECT');
// }else{
//     console.log('INCORRECT');
// }

// NOT EQUAL VALUE & TYPE
// if(id !== 100){
//     console.log('CORRECT');
// }else{
//     console.log('INCORRECT');
// }

// Defined or not
//  if(typeof id !== 'undefined'){

//     console.log(`The ID is ${id}`);

//  }else{
//      console.log('NO ID');
     
//  }

// Greater Than or Less Than
// if(id >= 200){
//     console.log('CORRECT');
    
// }else{
//     console.log('INCORRECT');
    
// }

// ELSE IF

// const color = 'orr';

// if(color === 'red'){
//     console.log('Color is Red');
// }
// else if(color === 'blue'){
//     console.log('Color is Blue');
// }
// else{
//     console.log('Color is not red or blue');
// }

// LOGICAL OPERATOR

// //AND
// const name = 'Joy';
// const age = 15;

// if(age > 0 && age < 12){
//     console.log(`${name} is a Clild`);
// }
// else if(age >= 13 && age <= 19){
//     console.log(`${name} is a teenager`);
// }
// else{
//     console.log(`${name} is an adult`);
// }

//OR
// const name = 'Joy';
// const age = 16;

// if(age < 16 || age > 65){
//     console.log(`${name} can not run in race`);
// }
// else{
//     console.log(`${name} is registered for the race`);
// }

// TERNARY OPERATOR
// console.log(id === 100 ? 'CORRECT':'INCORRECT');

// Without {} 
// if(id === 100)
//     console.log('CORRECT');
// else
//     console.log('INCORRECT');
    

/* ================
        SWITCH
===================*/

// const color = 'red';
// switch(color){
//     case 'red':
//         console.log('Color is RED');
//         break;
//     case 'blue':
//         console.log('Color is BLUE');
//         break;
//     default:
//         console.log('Color is Not RED OR BLUE');
//         break;  
// }

// let day;

// switch(new Date().getDay()){
//     case 0:
//         day = 'Sunday'
//         break;
//     case 1:
//         day = 'monday'
//         break;
//     case 2:
//         day = 'Tuesday'
//         break;
//     case 3:
//         day = 'Wednesday'
//         break;
//     case 4:
//         day = 'Thursday'
//         break;
//     case 5:
//         day = 'Friday'
//         break;
//     case 6:
//         day = 'Saturday'
//         break;
// }

// console.log(`Today is ${day}`);

/* FUNCTION */

//DECLARATION
// function greet(firstName = 'Jhon', lastName = 'Doe'){

//     // if(typeof firstName === 'undefined'){firstName = 'Jhon'}
//     // if(typeof lastName === 'undefined'){lastName = 'Doe'}
    
//     // console.log('Hello');
//     return 'Hello '+ firstName +' '+lastName;
// }

// // greet();
// console.log(greet('Shovon', 'Das'));


// Function Expression

// const squre = function(x = 4){
//     return x*x;
// };

// console.log(squre());

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSION - IIFEs

// (function(){

//     console.log('IIFE Ran...');
    
// })();

// (function(name){
//     console.log('Hello '+name);
// })('Brad');

// PROPERTY METHOD

// const todo = {
//     add : function() {
//             console.log('Add todo...');
//             },
//     edit: function (id) {
//         console.log(`Edit todo ${id}`);
        
//     }
    
// };

// todo.delete = function() {
//     console.log('Delete todo...');
// }

// todo.add();
// todo.edit(22); 
// todo.delete();

/*======================
    LOOPS / ITERATION 
========================*/

// FOR LOOP
// for(let i = 0; i <= 10; i++ ){
    
//     if(i === 2){
//         console.log('2 is my Favorite Number');
//         continue;
        
//     }
//     if(i === 5){
//         console.log('Stop');
//         break;
//     }
//     console.log(i);

// }

// // WHILE LOOP
// let i = 0;

// while(i < 10){
//     console.log('number '+i);
//     i++;
    
// }

// // DO WHILE LOOP
// let i = 0;
// do{
//     console.log('number '+i);
//     i++;
// }while(i < 10)


//LOOP THROUGH ARRAY

 //const cars = ['bmw','toyota','tata','mustang'];

// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i]); 
// } 

// RECOMMAND (FOREACH)
// cars.forEach(car => console.log(car));

// // MAP
// const users = [
//     {
//         id: 1,
//         name: 'jhon'
//     },
//     {
//         id: 2,
//         name: 'Sara'
//     },
//     {
//         id: 3,
//         name: 'Moha'
//     },
//     {
//         id: 4,
//         name: 'Dipk'
//     },
// ];

// const ids = users.map((user) => user.id);

// console.log(ids);


// FOR IN LOOP

const users = {
    firstName : 'Jhon',
    lastName : 'Doe',
    age : 40 
 }
// console.log(users.firstName);

for(let i in users){
    
    console.log(`${i} : ${users[i]}`);
    
}
