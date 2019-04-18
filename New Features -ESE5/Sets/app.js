// Unique Values

// SETS - Store Unique Values of any typs
const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('A String');
set1.add({name: 'Jhon'});
set1.add(true);
//set1.add(100); // Not set

// const set2 = new Set([1, true, 'String']);

// console.log(set1)
// console.log(set2)
// console.log(set2.size)

// // Check for Values
// console.log(set1.has(100)) // true
// console.log(set1.has(50+50)) // true
// console.log({name: 'Jhon'}) //false
// console.log({name: 'Jhon'} === {name: 'Jhon' }) //false
// console.log('hello' === 'hello') //false

// set1.delete(100)

// console.log(set1)
// ITERATING THROUGH SETS

// For ...of

// for(let item of set1){
//     console.log(item)
// }
// for(let item of set1.keys()){
//     console.log(item)
// }
// for(let item of set1.values()){
//     console.log(item)
// }
// for(let item of set1.entries()){
//     console.log(item)
// }


// // For Each Loop
// set1.forEach((values) => {
//     console.log(values)
// });

// Convert to Array
const setArray = Array.from(set1);
console.log(setArray);