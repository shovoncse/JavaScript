// UI ELEMENTS

//BUTTONS
const textBtn = document.getElementById('get-text'); 
const jsonBtn = document.getElementById('get-json'); 
const apiBtn = document.getElementById('get-api'); 
//OUTPUT
const div = document.getElementById('output');

// EVENTS
textBtn.addEventListener('click', getTextData);
jsonBtn.addEventListener('click', getJsonData);
apiBtn.addEventListener('click', getApiData);

//GET LOCAL TEXT DATA
function getTextData(){
    //OLD SCHOOL
    // const xhr = new XMLHttpRequest();
    // xhr.open('GET', 'data.txt', true);
    // xhr.onload = function(){
    //     if(xhr.status === 200){
    //         console.log(this.responseText);
    //     }
    // }
    // xhr.send();

    // KINDA COOL
    // NOTE: fetch returns promises
    fetch('data.txt')
        // .then(res => {return res.text()})
        .then(res => res.text())
        .then(data => {console.log(data);div.innerHTML=data})
        .catch(err => console.log(err));
};


//GET LOCAL JSON DATA
function getJsonData(){
    fetch('post.json')
    .then(res => res.json())
    .then(posts => {
        /* 
        When we receive the data from a web server, 
        the data is always a string, 
        so we need to parse the data with JSON.parse(), 
        and the data becomes a JavaScript object. 
        If you have JSON data as part of a string, 
        the best way to parse it is by using the JSON.parse() method.
        */
        /*
        When using the JSON.parse() on a JSON derived from an array, 
        the method will return a JavaScript array, instead of a JavaScript object.
        */
        console.log(posts);
        
        let output = '<ul>';    
        posts.forEach(post => {
            output += `<li>${post.Title}</li>`
        });
        output += '</ul>';

        div.innerHTML = output;


    })
    .catch(err => console.log(err));
}
//GET EXTERNAL API DATA
function getApiData(){
    fetch('https://api.github.com/users')
    .then(res => {return res.json()})
    .then(data => {
        
        let output = '<ul>';    
        data.forEach(user => {
            output += `<li>${user.avatar_url}</li>`
        });
        output += '</ul>';

        div.innerHTML = output;

        console.log(data);
        
    })
    .catch(err => console.log(err));
}