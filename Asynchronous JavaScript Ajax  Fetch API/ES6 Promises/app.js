const posts = [
    {'title': 'Post One', 'body': 'This is Post Body One'},
    {'title': 'Post Two', 'body': 'This is Post Body Two'}
];

/*
* ASYNCHRONOUS WAy
*/

// function createPost(post){
//     setTimeout(function(){
//         posts.push(post);
//     }, 2000);
// }

// function getPosts(){
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(post => console.log(post.title));    
//     }, 1000);
    
// }


// createPost({title:'Post Three', body: 'This is Post body Three'});
// getPosts();

/*
* SYNCHRONOUS WAy
*/

function createPost(post){

    return new Promise(function(resolve, reject){
        setTimeout(function(){
            posts.push(post);

            //For error Check (reject-> catch())
            let error = false;
            
            if(!error){
                resolve();
            }else{
                reject('Error: Something Went Wrong!');
            }

        }, 2000);
    });
    
}

function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(post => console.log(post.title));    
    }, 1000);
}

createPost({title:'Post Three', body: 'This is Post body Three'}).then(getPosts).catch(err => console.error(err));