const myLibrary = [];

//Book constructors, library function, display books

function Book(title,author,pages,read) {
     if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
    this.sayBook = function () {
        console.log(this.title);
        console.log(this.id);
    };
}

function addBookToLibrary(title,author,pages,read) {
  const newBook = new Book(title,author,pages,read);
  myLibrary.push(newBook);
}

// addBookToLibrary("Modern Friendship", "Anna Goldfarb", 197, "no");
// addBookToLibrary("The Hobbit","J.R.R. Tolkien",320,"no");
// addBookToLibrary("Harry Potter","J.K. Rowling",269, "yes");

console.log(myLibrary);

function displayBooks() {
  const tableContainer = document.querySelector(".table-body");
  tableContainer.replaceChildren();
  myLibrary.forEach((book) => {
    const bookCard = document.createElement('tr');
    bookCard.dataset.id = book.id;
    bookCard.classList.add('bookCard');
    bookCard.innerHTML = `
          <td><p>${book.title}</p></td>
          <td><p>${book.author}</p></td>
          <td><p>${book.pages}</p></td>
          <td><p>${book.read}</p></td>
          <td><button class="delete">Delete</button></td>
      `;
    tableContainer.appendChild(bookCard);
  });
}

displayBooks(myLibrary);

//Dialog + form section

const form = document.querySelector("form");
const close = document.querySelector("button[type='button']");
const dialog = document.querySelector('#my-dialog');

form.addEventListener("submit",(event) => {
  event.preventDefault();
  const formData = new FormData(form);
  addBookToLibrary(
    formData.get('title'), 
    formData.get('author'), 
    formData.get('pages'), 
    formData.get('read')
  );
  form.reset();
  dialog.close();
  console.log("Form submission completed and refresh prevented successfully");
  displayBooks();
});
  
close.addEventListener("click",() => {
  dialog.close()
  console.log("Form successfully closed.")
});

//Deleting book

const deleteButton = document.querySelector(".table-body");

deleteButton.addEventListener("click",(event) => {
  if (event.target.classList.contains("delete")) {  
    const row = event.target.closest('tr');
    if (row) {
      row.remove();
      console.log("Deleted row")
    }
  }  
}); //ty istvan-takacs