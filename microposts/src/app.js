// Common JS Module Syntax
// const person = require('express'); //Comes from node_module folder  
// const person = require('./mymodule1'); //Comes from path
// console.log(person)
// console.log(person.name)
// console.log(person.email)

// ES2015 Module
// import {person} from './mymodule2';
// console.log(person.age);
// // import {person, sayHello} from './mymodule2';
// import * as mod from './mymodule2';
// import {sayHello} from './mymodule2';
// console.log(sayHello())
// console.log(mod.sayHello())

// import greeting from './mymodule2';

// console.log(greeting)

// START
import {
    http
} from './http';
import {
    ui
} from './ui';

// Get posts on DOM Load
document.addEventListener('DOMContentLoaded', getPosts);

// Listen for Add Posts
document.querySelector('.card-form').addEventListener('click', submitPost);

// Listen for Delete Posts
document.querySelector('#posts').addEventListener('click', deletePost);

// Listen for Edit Posts
document.querySelector('#posts').addEventListener('click', enableEdit);

// Listen for Update Posts
document.querySelector('.card-form').addEventListener('click', updatePost);

// Listen for Cancel Edit
document.querySelector('.card-form').addEventListener('click', cancelEdit);

function getPosts() {
    http.get('http://localhost:3000/posts').then(data => ui.showPosts(data)).catch(err => console.log(err));
}

function deletePost(e) {
    if (e.target.parentElement.classList.contains('delete')) {
        const id = e.target.parentElement.dataset.id;
        if (confirm("Are you sure?")) {
            http.delete(`http://localhost:3000/posts/${id}`).then(data => {
                ui.showAlert("Post Removed", "alert alert-success");
                getPosts();
            }).catch(err => console.log(err));
        }
    }
    e.preventDefault();
}

function cancelEdit(e) {
    if (e.target.classList.contains('post-cancel')) {
        ui.changeFormState('add');
    }
    e.preventDefault();
}

function submitPost(e) {
    if (e.target.classList.contains('post-submit')){
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;

    const data = {
        title,
        body
    }

    if (title === '' || body === '') {
        ui.showAlert('Please fill in all fields', 'alert alert-danger');
    } else {
        http.post('http://localhost:3000/posts', data).then(data => {
            ui.showAlert('New Post Added', 'alert alert-success');
            ui.clearFields();
            getPosts();
        }).catch(err => console.log(err));
    }
    }
    e.preventDefault();
}

function enableEdit(e) {
    if (e.target.parentElement.classList.contains('edit')) {

        const id = e.target.parentElement.dataset.id;
        const body = e.target.parentElement.previousElementSibling.textContent;
        const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;

        const data = {
            id,
            title,
            body
        }

        // Fill Form WIth Current Dara
        ui.fillForm(data);
        document.getElementById('title').focus();
    }
    e.preventDefault();
}

function updatePost(e) {
    if (e.target.classList.contains('post-update')) {
        const title = document.querySelector('#title').value;
        const body = document.querySelector('#body').value;
        const id = document.querySelector('#id').value;

        const data = {
            title,
            body
        };

        if (title === '' || body === '') {
            ui.showAlert('Please fill in all fields', 'alert alert-danger');
        } else {
            http.put(`http://localhost:3000/posts/${id}`, data).then(data => {
                ui.showAlert('Post Updated', 'alert alert-success');
                ui.changeFormState('add');
                getPosts();
            }).catch(err => console.log(err));
        }
    }
    e.preventDefault();
}