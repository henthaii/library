const myLibrary = [];

function Book(title,author,pages,read) {
     if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.sayBook = function () {
        console.log(this.title);
    };
}

function addBookToLibrary(title,author,pages,read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}