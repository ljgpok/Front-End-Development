// Book Class: Represents a Book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class: Handles UI Tasks
class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                title: 'Book One',
                author: 'John Doe',
                isbn: '343422'
            },
            {
                title: 'Book Two',
                author: 'Jane Doe',
                isbn: '45657783'
            },
        ];
        
        const books = StoredBooks;

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        condt row = document.createElement('tr');
    }
}

// Store Class

// Event: Display Books

// Event: Add a Book

// Event: Remove a Book