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
    console.log(book.title);
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
// Event Listener
document.getElementById('book-form').addEventListener('submit', function(e){
    // Get Form Values
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

        // Instantiate Book
        const book = new Book(title, author, isbn);

        // Instantiate UI
        const ui = new UI();

        //Add book to list
        ui.addBookToList(book);
    e.preventDefault();
})