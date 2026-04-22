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
  const tableContainer = document.querySelector(".table-container");
  // tableContainer.innerHTML = "";
  myLibrary.forEach((book) => {
    const bookCard = document.createElement('tr');
    bookCard.classList.add('bookCard');
    bookCard.innerHTML = `
        <td><h3>${book.title}</h3></td>
        <td><p>Author: ${book.author}</p></td>
        <td><p>Pages: ${book.pages}</p></td>
        <td><p>Read: ${book.read}</p></td>
      `;
    tableContainer.appendChild(bookCard);
  });
}

displayBooks(myLibrary);

// const newBookForm = document.querySelector("button").addEventListener("click",displayForm)

// function displayForm() {
//   const formContainer = document.querySelector(".form-container");
//   formContainer.innerHTML = "";
//   formContainer.innerHTML = `
//     <form action="" method="post">
//       <div>
//         <label for="new-book">Book</label>
//         <input type="text" name="new-book" id="new-book">
//       </div>
//       <div>
//         <label for="author">Author</label>
//         <input type="text" name="author" id="author">
//       </div>
//       <div>
//         <label for="pages">Number of Pages</label>
//         <input type="number" name="pages" id="pages">
//       </div>
//       <div>
//         <label for="read">Have you read this?</label>
//         <input type="text" name="read" id="read">
//       </div>
//     </form>
//   `
// }

const submit = document.querySelector("submit");
const close = document.querySelector("close");

submit.addEventListener("click",(event) => {
  event.preventDefault();
  console.log("Form submission completed and refresh prevented successfully");
});

close.addEventListener("click",() => {
  dialog.close()
});