// Extract Variables from array or object

// Destructuruing Assignment
// let a, b;
// [a, b] = [100, 200];
// // Rest Pattern
// [a, b, c, ...rest] = [100, 200, 300, 400, 500]

// console.log(a)
// console.log(b)
// console.log(rest)

// ({a, b} = { a: 100, b: 300, c: 300, d: 400, e: 500});
// ({a, b, ...rest} = { a: 100, b: 300, c: 300, d: 400, e: 500});
// console.log(a)
// console.log(b)
// console.log(rest)


// Array Destructuring
// const people = ['Jhon', 'Beth', 'Mike'];

// const [person1, person2, person3] = people;
// console.log(person1)
// console.log(person2)
// console.log(person3)

// Parse array returned from function
// function getPeople() {
//     return ['jhon', 'beth', 'mike'];
// }

// let person1, person2, person3;

// [person1, person2, person3] = getPeople();
// console.log(person1)
// console.log(person2)
// console.log(person3)

const person = {
    name: 'Jhon',
    age: 32,
    city: 'Khulna',
    gender: 'Male',
    sayHello: function(){
        console.log('Hello')
    }
}

// // OLD ES5
// const name = person.name,
//       age = person.age,
//       city = person.city,
//       gender = person.gender;

// NEW ES6 Destructuring
const {name, age, city, sayHello} = person;

console.log(name, age, city)
sayHello();