const myLibrary = [];

function Book(title,author,pages,read) {
     if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = self.crypto.randomUUID();
    this.sayBook = function () {
        console.log(this.title);
        console.log(this.id);
    };
}

function addBookToLibrary(title,author,pages,read) {
  const newBook = new Book(title,author,pages,read);
  myLibrary.push(newBook);
}

new addBookToLibrary("Modern Friendship", "Anna Goldfarb", 197, "no");
new addBookToLibrary("The Hobbit","J.R.R. Tolkien",320,"no");
new addBookToLibrary("Harry Potter","J.K. Rowling",269, "yes");

console.log(myLibrary);

function displayBooks() {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  myLibrary.forEach((book) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('bookcard');
    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Read: ${book.read}</p>`;
    container.appendChild(bookCard);
  });
}

displayBooks(myLibrary);

const newBookForm = document.querySelector("button").addEventListener("click",displayForm)

function displayForm() {
  const formContainer = document.querySelector(".form-container");
  formContainer.innerHTML = "";
  formContainer.innerHTML = `
    <form action="" method="post">
      <div>
        <label for="new-book">Book</label>
        <input type="text" name="new-book" id="new-book">
      </div>
      <div>
      <label for="author">Author</label>
      <input type="text" name="author" id="author">
      </div>
      <div>
      <label for="pages">Number of Pages</label>
      <input type="number" name="pages" id="pages">
      </div>
      <div>
      <label for="read">Have you read this?</label>
      <input type="text" name="read" id="read">
      </div>
    </form>
  `
}