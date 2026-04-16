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

// console.log(Book);
console.log(myLibrary);

// myLibrary.forEach(item => {
//   let li = document.createElement('li');
//   li.innerText = item;
//   document.getElementById('myList').appendChild(li);
// })

function displayBooks() {
  const container = document.getElementById("container");
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
// list.innerHTML = myLibrary.map(item => '<li>${item}</li>').join("");