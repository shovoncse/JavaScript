// function myFunc(){
//     return 'Hello'
// }

// async function myFunc(){
//     const promise = new Promise((resolve,reject)=>{
//         setTimeout(() => resolve('Hello'),1000);
//     });


//     const err = false

//     if(!err){
//         const res = await  promise;
//         return res; 
//     }else{
//         await Promise.reject(new Error('Something Went Wrong'));
//     }
// }

// myFunc()
// .then(res => console.log(res))
// .catch(res => console.log(res));


async function getUser(){

    // await response of the fetch call
    const response = await fetch('https:jsonplaceholder.typicode.com/users');
    // Only proceed once second promise is resolved
    // const data = response.json();
    //const data = await response.json();
    // Only proceed once second promise is resolved
    return response.json();
}

getUser().then(data => console.log(data))