class UI {
    constructor(){
        this.post = document.querySelector('#posts');
        this.titleInput = document.querySelector('#title');
        this.bodyInput = document.querySelector('#body');
        this.idInput = document.querySelector('#id');
        this.postSubmit = document.querySelector('.post-submit');
        this.forState = 'add';
    }

    // Show
    showPosts(posts){
        let output = '';

        posts.forEach(post => {
            output += `
                <div class="card mb-3">
                    <div class="card-body">
                        <h4 class="card-title">${post.title}</h4>
                        <p class="card-text">${post.body}</p>
                        <a href="#" class="edit card-link" data-id="${post.id}"><i class="fa fa-pencil"></i></a>
                        <a href="#" class="delete card-link" data-id="${post.id}"><i class="fa fa-remove"></i></a>
                    </div>
                </div>
            `
        });

        this.post.innerHTML = output;
    }

    // Clear Fields
    clearFields(){
        this.titleInput.value = '';
        this.bodyInput.value = '';
    }
    // Show Alert
    showAlert(msg, cls){
        this.clearAlert();

        // Craete Div
        const div = document.createElement('div');
        div.className = cls;
        div.appendChild(document.createTextNode(msg));
        const container = document.querySelector('.postsContainer');
        const posts = document.querySelector('#posts');
        container.insertBefore(div, posts);

        // Timeout
        setTimeout(() =>{
            this.clearAlert();
        }, 3000);
    }
    
    // Clear Alert
    clearAlert(){
        const currentAlert = document.querySelector('.alert');

        if(currentAlert){
           currentAlert.remove(); 
        }

    }

    //Fill form to edit
    fillForm(data){
        this.bodyInput.value = data.body;
        this.titleInput.value = data.title;
        this.idInput.value = data.id;

        if(!document.querySelector('.post-update')){
            this.changeFormState('edit');
        }
    }

    clearIdInput(){
        this.idInput.value = '';
    }

    // Change Form State
    changeFormState(type){
        if(type === 'edit'){
            this.postSubmit.textContent = 'Update Post';
            this.postSubmit.className = 'post-update btn btn-warning btn-block';

            // Create Cancel button
            const button = document.createElement('button');
            button.className = 'post-cancel btn btn-light btn-block';
            button.appendChild(document.createTextNode('Cancel Edit'));

            // Get Parent
            const cardForm = document.querySelector('.card-form');
            // Get Element to insert before
            const formEnd = document.querySelector('.form-end');
            // Insert Cancel Button
            cardForm.insertBefore(button, formEnd);
        }else {
            this.postSubmit.textContent = 'Post It';
            this.postSubmit.className = 'post-submit btn btn-primary btn-block';

            // Remove Cancel button if it is there
            if(document.querySelector('.post-cancel')){
                document.querySelector('.post-cancel').remove();
            }

            // Clear ID From Hidden Field
            this.clearIdInput();
            // Clear Fields
            this.clearFields();
        }
    }
    
    
}

export const ui = new UI();