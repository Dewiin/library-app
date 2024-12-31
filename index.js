const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(bookObject) {
    myLibrary.push(bookObject);
}

function displayBooks() {
    const content = document.querySelector(".content");
    content.innerHTML = "";

    myLibrary.forEach((book) => {
        const div = document.createElement("div");
        div.classList.add("card");

        const read = (book.read) ? "Read" : "Not Read";

        div.innerHTML = `
            <div class="infoHeader">
                <h1> ${book.title} </h1>
                <h2>by ${book.author}</h2>
                <h3>${book.pages} pages</h3>
            </div>
            <div class="actions">
                <div class="actionsButtons">
                    <button class="buttonsRead">${read}</button>
                    <button class="buttonsDelete">Delete</button>
                </div>
                <div class="actionsStatus">
                    Completed
                </div>
            </div>
        `

        content.appendChild(div);
    });

    // Read book
    const readButtons = document.querySelectorAll(".buttonsRead");
    readButtons.forEach((readButton, index) => {
        readButton.addEventListener("click", (e) => {
            myLibrary[index].read = !myLibrary[index].read;
            e.target.textContent = (myLibrary[index].read) ? "Read" : "Not Read";
            e.target.style.backgroundColor = (myLibrary[index].read) ? "rgb(105, 128, 36)" : "rgb(168, 194, 86)";
            const status = e.target.parentElement.nextElementSibling;
            status.textContent = (myLibrary[index].read) ? "Completed" : "In Progress";
        });
        readButton.style.backgroundColor = (myLibrary[index].read) ? "rgb(105, 128, 36)" : "rgb(168, 194, 86)";
        const status = readButton.parentElement.nextElementSibling;
        status.textContent = (myLibrary[index].read) ? "Completed" : "In Progress";
    });

    // Delete book
    const deleteButtons = document.querySelectorAll(".buttonsDelete");
    deleteButtons.forEach((deleteButton, index) => {
        deleteButton.addEventListener("click", (e) => {
            e.target.parentElement.parentElement.parentElement.remove();
            myLibrary.splice(index, 1);
            displayBooks();
        });
    });

}

// Open modal
const openModal = document.querySelector(".addButton");
openModal.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    modal.style.display = "block";
});

// Close modal
window.onclick = function(e) {
    const modal = document.querySelector(".modal");
    if (e.target == modal) {
        modal.style.display = "none";
    }
}


// Add book
const addButton = document.querySelector(".addToLibrary");
addButton.addEventListener("click", (e) => {
    const form = document.querySelector(".modalInputs");
    e.preventDefault();

    if (!form.checkValidity()) {
        form.reportValidity(); 
        return; 
    }

    const title = document.querySelector("#bookTitle").value;
    const author = document.querySelector("#bookAuthor").value;
    const pages = document.querySelector('#bookPages').value;
    
    const book = new Book(title, author, pages, false);
    addBookToLibrary(book);

    // reset input fields
    document.querySelector("#bookTitle").value = "";
    document.querySelector("#bookAuthor").value = "";
    document.querySelector('#bookPages').value = "";

    // close modal after adding book
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
    
    displayBooks();
});

