const myLibrary = [];

function Book(title,author) {
     if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
    this.title = title;
    this.author = author;
    this.sayBook = function () {
        console.log(this.title);
    };
}

function addBookToLibrary() {

}