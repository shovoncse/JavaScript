// Local Storage Class
class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class
class UI {

    addBookToList(book) {
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

    showAlert(getMsg, getClass) {
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
    
    deleteBook(target) {

        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }

    }
    
    clearFields() {

        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';

    }

}

// Local Storage Class
class Store {

    static getBook(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        }else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }
    
    static displayBook(){
        const books = Store.getBook();

        books.forEach(function(book){
            const ui =  new UI();

            // Add book to UI
            ui.addBookToList(book);

        });
    }
    
    static addBook(book){

        //Books from LocalStorage
        const books = Store.getBook();

        // Push New book into book array with previous array
        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));

    }
    
    static removeBook(isbn){
        
        const books = Store.getBook();

        books.forEach( (book, index) => {
            if(book.isbn === isbn) {
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));

    }
}

// DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBook());

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
            // Add book to Local Storage
            Store.addBook(book);
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

    //Remove from LS
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent); 

    // Show message
    ui.showAlert('Book Removed!', 'info');
    
    e.preventDefault();

});

