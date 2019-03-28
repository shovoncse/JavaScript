// Book Constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI(){}

// UI Prototype(method) add book to list
UI.prototype.addBookToList = function(book){
    
    const list = document.getElementById('book-list');
    // Create tr Element
    const row = document.createElement('tr');
    // Insert Column
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">x</td>
    `;
    list.appendChild(row);
}


// UI Prototype - Clear Fields
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}


// UI Prototype Alert
UI.prototype.showAlert = function(getMsg,getClass){

    // Create div
    const div = document.createElement('div');
    // Add Classes
    div.className = `alert alert-${getClass}`;
    // Add Text
    div.appendChild(document.createTextNode(getMsg));
    // Get Parent
    const cardContent = document.querySelector('.card-content');
    // Get Form
    const cardTitle = document.querySelector('.card-title');
    // Insert Alert
    cardContent.insertBefore(div, cardTitle);

    // Timeout 3 Seconds
    setTimeout(function(){
        document.querySelector('.alert').remove();
    },3000);

}

// UI Prototype Delete book
UI.prototype.deleteBook = function(target){

    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}
// Event Listener
document.getElementById('book-form').addEventListener('submit', function(e){
    
    e.preventDefault();
    
    // Get Form Values
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

        // Instantiate Book
        const book = new Book(title, author, isbn);

        // Instantiate UI
        const ui = new UI();

        // Validate
        if(title === '' || author === '' || isbn === ''){

            // Error Alert
            ui.showAlert('Please fill in all Fields', 'danger');
        
        }else{

            //Add book to list
            ui.addBookToList(book);
            // Show Success
            ui.showAlert('Book Added!', 'success');
            // Clear Fields
            ui.clearFields();
        
        }

    
});

document.getElementById('book-list').addEventListener('click', function(e){

    // Instantiate UI
    const ui = new UI();

    // Delete Book
    ui.deleteBook(e.target);

    ui.showAlert('Book Removed!', 'info');
    
    e.preventDefault();

});
