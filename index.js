const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(bookObject) {
    myLibrary.push(bookObject);
}

// Add book
const addButton = document.querySelector(".addButton > button");
addButton.addEventListener("click", () => {
    const content = document.querySelector(".content");
    const div = document.createElement("div");
    div.classList.add("card");
    content.appendChild(div);
});

// Read book
const readButtons = document.querySelectorAll(".buttonsRead");
readButtons.forEach((readButton) => {
    readButton.addEventListener("click", (e) => {
        e.target.textContent = (e.target.textContent == "Read") ? "Not Read" : "Read";
        e.target.style.backgroundColor = (e.target.textContent == "Read") ? "rgb(105, 128, 36)" : "rgb(168, 194, 86)";
        const status = e.target.parentElement.nextElementSibling;
        status.textContent = (e.target.textContent == "Read") ? "Completed" : "In Progress";
    });
});

// Delete book
const deleteButtons = document.querySelectorAll(".buttonsDelete");
deleteButtons.forEach((deleteButton) => {
    deleteButton.addEventListener("click", (e) => {
        deleteButton.parentElement.parentElement.parentElement.remove();
    });
});



