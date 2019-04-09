// const http = new easyHTTP;
const http = new easyHTTP();

// Get POSTS
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log(posts);
        
//     }
// });

// Get Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/11', function(err, posts){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(posts);
//     }
// });

// Create Data
const data = {
    'title': 'Custom Post',
    'body': 'This is a custom Post'
};

// Craete POST

// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
// if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }
// });

// // Update Post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post){
// if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }
// });

// Update Post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, post){
if(err){
        console.log(err);
    }else{
        console.log(post);
    }
});
