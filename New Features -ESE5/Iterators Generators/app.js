// // Iterator Example
// function nameIterator(names){

//     let nextIndex = 0;

//     return {
//         next: function(){
//             return nextIndex < names.length ? {
//                 value: names[nextIndex++], 
//                 done: false
//             } : {
//                 done:true
//             }
//         }
//     }
// }

// // Create an Array of names
// const namesArray = ['Jhon', 'Jill', 'Jack'];

// // init iterator and pass in the names array
// const names = nameIterator(namesArray); // Returns function

// console.log(names.next().value)
// console.log(names.next().value)
// console.log(names.next().value)

// Generator Example
// function* sayNames() {
//     yield 'Jack';
//     yield 'Jill';
//     yield 'Jack';

// }

// const name = sayNames();
// console.log(name.next().value)
// console.log(name.next().value)
// console.log(name.next().value)
// console.log(name.next())

// ID Creator
function* createIds(){
    let index = 1;

    while(true){
        yield index++;
    }
}

const gen = createIds();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);