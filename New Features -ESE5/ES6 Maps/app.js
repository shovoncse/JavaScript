// MAPS = key-value pairs - can use ANY type as a key or value

const map1 = new Map();

// Set Keys
const key1 = 'some string',
      key2 = {},
      key3 = function() {

      };

// Set map values by Key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// Get Values by Key
// console.log(map1.get(key2), map1.get(key1));

// Count Values

// console.log(map1.size);

// ITERATING MAPS

// loop through map using for---of loop to get keys and values
for(let [key,value] of map1){
    // console.log(key +'='+value)
}

// Iterate keys only
for(let key of map1.keys()){
    // console.log(key)
}

// Iterate keys only
for(let values of map1.values()){
    // console.log(values)
}

// Loop with forEach
map1.forEach((value, keys) => {
    // console.log(keys +'='+value)
});

// ONVERT TO ARRAYS

// Create an Array of the key value pairs
const keyValArr = Array.from(map1);
console.log(keyValArr);

// Create an Array of the values
const valArr = Array.from(map1.values());
console.log(valArr);

// Create an Array of the keys 
const keyArr = Array.from(map1.keys());
console.log(keyArr);