// let val;

// val = document;
// val = document.all;
// val = document.all[0];
// val = document.all[1];
// val = document.all[2];
// val = document.all.length;
// // val = document.head;
// // val = document.body;
// // val = document.title;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

// val = document.images;
// val = document.scripts;
// val = document.scripts[0].getAttribute('src');

// // 
// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts);
// scriptsArr.forEach((scr) => console.log(scr)); 




// console.log(val);


/* START */

//document.getElementById()
// console.log(document.getElementById('task-title'));

// Get Things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// Change Style
// document.getElementById('task-title').style.color = 'red';
// document.getElementById('task-title').style.display = 'none';

// Change Content
// const taskTitle = document.getElementById('task-title') ;

// document.getElementById('task-title').textContent = 'Task List';
// document.getElementById('task-title').innerText = 'My Task';
// document.getElementById('task-title').innerHTML = '<span>Task Span</span>';
// taskTitle.innerHTML = '<span>Task Span</span>';


// Query Selector
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));


// document.querySelector('li').style.color = 'red';
// document.querySelector('li').style.color = 'blue';
// document.querySelector('li:last-child').style.color = 'green';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';
// document.querySelector('li:nth-child(4)').textContent = 'yellow';
// document.querySelector('li:nth-child(odd)').textContent = 'odd';
// document.querySelector('li:nth-child(even)').textContent = 'odd';

// Select more than one
// getElementsByClassName()

// const items = document.getElementsByClassName('collection-item');
// // console.log(items);
// // console.log(items[0]);

// items[1].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item') ;

// console.log(listItems);

// document.getElementByTagName()

//  let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'blue';

// Convert HTML Collection into Array

// lis = Array.from(lis);
// lis.reverse();

// lis.forEach((li,index)=> {
//     console.log(li);
//     li.innerText =`${index}: hello`;
// });

// document.querySellectorAll

// const items = document.querySelectorAll('ul.collection li.collection-item');
// items.forEach((li,index)=> {
    //     li.innerText =`${index}: hello`;
    // });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach((li) => li.style.background = '#ccc');
// liEven.forEach((li) => li.style.background = 'skyblue');

// with for
    // for (let i = 0; i <liEven.length; i++) {
    //     liEven[i].style.background = 'skyblue';
    // }


// let val;
// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');

// val = listItem;
// val = list;

// // Get Child Node
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[0].nodeType;
// // 1 - Element
// // 2 - Attribute (deprecated)
// // 3 - Text Node
// // 8 - Comment
// // 9 - Document itSelf
// // 10 - Doctype

// // Get children elements nodes
//  val= list.children;
//  val= list.children[1];
//  val= list.children[1].textContent = 'Hello';

// //  Children of Children
// list.children[0].children[0].id = 'test-link';
// val = list.children[0].children[0];

// // First Child
// val = list.firstChild;
// val = list.firstElementChild;

// // Last Child
// val = list.lastChild;
// val = list.lastElementChild;
// // Count child elements
// val = list.childElementCount;

// // Get Parrent element
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;

// // get next sibling
// val = listItem.nextSibling;
// val = listItem.nextElementSibling;
// val = listItem.nextElementSibling.nextElementSibling;

// get previous sibling
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;
// val = listItem.previousElementSibling.previousElementSibling;



// // CREATE ELEMENT
// const li = document.createElement('li');

// // Add Class
// li.className = 'collection-item'

// // Add id
// li.id = 'new-item';

// // Add Attribute
// li.setAttribute('title','New Item');

// // Create Text Node and append
// li.appendChild(document.createTextNode('Hello World'));

// // Create New link Element
// const link = document.createElement('a');
// link.className = 'delete-item secondary-content';
// link.innerHTML = '<i class="fa fa-remove"></i>';

// // Append Link into Li
// li.appendChild(link);

// // Append Li as Child to ul
// document.querySelector('ul.collection').appendChild(li);


// console.log(li);

/*=== REPLACING ELEMENT ===*/

// Create
// const newHeading = document.createElement('h2');
// // add id
// newHeading.id = 'task-title';
// // new text node
// newHeading.appendChild(document.createTextNode('Heading'));
// // get old heading
// const oldHeading = document.querySelector('h5#task-title');
// // parent
// const parent = document.querySelector('h5#task-title').parentNode;
// // replace
// parent.replaceChild(newHeading, oldHeading)

// console.log(newHeading);

// Remove element
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// Remove list item
//  lis[0].remove();
//  console.log(lis[3]);
 

// Remove child element
// list.removeChild(lis[1]);

// CLASSES & ATTR
// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];

// let val;

// // Classes
// val = link.className;
// // val = link.classList;
// // val = link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');
// val = link;

// // Atteibutes
// val = link.getAttribute('href');
// val = link.setAttribute('href', 'http://google.com');
// val = link.hasAttribute('href');
// link.setAttribute('title', 'Google');
// val = link.hasAttribute('title');
// console.log(val);

// CLASS 8

//Unname Function
// document.querySelector('.clear-tasks').addEventListener('click', (e) => {e.preventDefault();console.log('Hello Clear')});

// Named function
// document.querySelector('.clear-tasks').addEventListener('click', onClick);
// // document.querySelector('.clear-tasks').addEventListener('mouseover', onClick);

// function onClick(e){
//         e.preventDefault();
//         //console.log('Hello Clear')

//         let val;

//         val = e ;
        
//         // Event Target Element
//         val = e.target;
//         val = e.target.id;
//         val = e.target.className;
//         val = e.target.classList;
//         val = e.target.classList[1];
//         e.target.innerText = 'Hello';

//         // Event Type
//         val = e.type;
        
//         // Timestamp
//         val = e.timeStamp;
        
//         // Coords event relative to the window
//         val = e.clientY; //from top
//         val = e.clientX; //from left
        
//         // Coords event relative to the element
//         //val = e.offsetY; //from top - bottom
//          val = e.offsetX; //from left - right



//         console.log(val);

        // CLASS 8 ENDS
     
//}

// const ClearBtn = document.querySelector('.clear-tasks');

// const card = document.querySelector('.card');

// const heading = document.querySelector('h5');

//Click
// ClearBtn.addEventListener('click', runEvent);
// Dubble Click
// ClearBtn.addEventListener('dblclick', runEvent);
// Mouse Down
// ClearBtn.addEventListener('mousedown', runEvent);
// Mouse Up
// ClearBtn.addEventListener('mouseup', runEvent);
// Mouse Enter
//  card.addEventListener('mouseenter', runEvent);
// // Mouse Leave
//  card.addEventListener('mouseleave', runEvent);
// // Mouse Over
//  card.addEventListener('mouseover', runEvent);
// // Mouse Out
// card.addEventListener('mouseout', runEvent);


// Mouse Move (Awesome)
//card.addEventListener('mousemove', runEvent);


// Event Handler
// function runEvent(e){ 
//     console.log(`Event Type: ${e.type}`);
//     heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
//     document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;
//  }

 // CLASS 9 END

 //const form = document.querySelector('form');
 //const taskInput = document.getElementById('task');
 //const heading = document.querySelector('h5');

//  Clear Input
//taskInput.value = '';

//form.addEventListener('submit', runEvent);
// Key Down
// taskInput.addEventListener('keydown', runEvent);
// Key Up
// taskInput.addEventListener('keyup', runEvent);
// Key press
// taskInput.addEventListener('keypress', runEvent);
// Foucas
//taskInput.addEventListener('focus', runEvent);
// Blur
//taskInput.addEventListener('blur', runEvent);
// Cut
//taskInput.addEventListener('cut', runEvent);
// paste
//taskInput.addEventListener('paste', runEvent);
// paste
//taskInput.addEventListener('input', runEvent);
// change (select)
//taskInput.addEventListener('change', runEvent);

//function runEvent(e){
    //  e.preventDefault();
    // //  Get input value 
    // console.log(taskInput.value);
    
    //console.log(`Event Type: ${e.type}`);
    // console.log(e.target.value);
    //heading.innerText = e.target.value;
//}


// CLASS 10 ENDS

// EVENT BUBBLING
// EVENT DELEGATION (Opposite of Bubbling)

// SEE HOW EVENT BUBBLING WORKS

// document.querySelector('.card-title').addEventListener('click', function(){
//     console.log('card title');
// });
// document.querySelector('.card-content').addEventListener('click', function(){
//     console.log('card content');
// });
// document.querySelector('.card').addEventListener('click', function(){
//     console.log('card title');
// });
// document.querySelector('.col').addEventListener('click', function(){
//     console.log('col');
// });
 
// SEE HOW EVENT DELEGATION WORKS //e.target

//const delItem = document.querySelector('.delete-item');

//delItem.addEventListener('click', deleteItem);

//document.body.addEventListener('click', deleteItem);

//function deleteItem(e){ 
    //console.log('Delete Item');

    // if(e.target.parentElement.className === 'delete-item secondary-content'){
    // if(e.target.parentElement.classList[0] === 'delete-item'){
    //if(e.target.parentElement.classList.contains('delete-item')){
        //console.log('delete item');
        //e.target.parentElement.parentElement.remove();
    //}

    // console.log(e.target.parent);
//}

// Class 11 Ends

// Set Local Storage item (Stays after browser close)
// localStorage.setItem('name', 'jhon');
// localStorage.setItem('age', '27');
// localStorage.setItem('email', 'admin@gamil.com');

// Set Session Storage item (Gone after browser close)
// sessionStorage.setItem('name', 'Beth');

// Remove from Storage
// localStorage.removeItem('name');

// Get From Storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// console.log(name,age);

//localStorage.clear();

document.querySelector('form').addEventListener('submit', function(e){

    e.preventDefault();

    const task = document.querySelector('#task').value;
    
    // console.log(task);
    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    
    

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    alert('Task Saved');

});


const tasks = JSON.parse(localStorage.getItem('tasks'));
// console.log(tasks);
tasks.forEach(task =>  console.log(task));
