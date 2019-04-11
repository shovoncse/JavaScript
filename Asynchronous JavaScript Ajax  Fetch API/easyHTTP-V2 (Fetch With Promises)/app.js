const http = new EasyHTTP;

// http.get('https://jsonplaceholder.typicode.com/users');
// console.log(http.get('https://jsonplaceholder.typicode.com/users')); // Undefined

// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(data => console.log(data))

// Create User Data
const data = {
    name: 'Jhon Doe',
    username: 'jhondoe',
    email: 'jdow@gmail.com'
}


// Create User
// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(data => console.log(data))

// //UPDATE User Data
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//     .then(data => console.log(data))
//     .catch(data => console.log(data))


//Delete User Data
http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(data => console.log(data))