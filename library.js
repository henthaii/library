const myLibrary = [];

function Book(title,author) {
    this.title = title;
    this.author = author;
    this.sayBook = function () {
        console.log(this.title);
    };
}

function addBookToLibrary() {

}