let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

}

var testBook1 = new Book("sdf","fd",3,true);
var testBook2 = new Book("xccxcx","xc",4,true);

myLibrary.push(testBook2);
myLibrary.push(testBook1);

function addBookToLibrary() {
    var book = new Book(
        document.getElementById("bookTitle").value,
        document.getElementById("bookAuthor").value,
        document.getElementById("pageCount").value,
        document.getElementById("isRead").checked
    );
    myLibrary.push(book);
}


document.getElementById('addButton').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'flex';
})

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'none';
})

document.getElementById('formButton').addEventListener('click', function() {
    addBookToLibrary();
    library.innerHTML = "";
    genBookCard();
    document.getElementById('bookForm').reset();
});

const library = document.getElementById('library');

function genBookCard() {
    //var library = document.getElementById('library');
    for (const item of myLibrary){
        var bk = document.createElement("div");
        var linebreak = document.createElement("br");
        bk.className = "bookCard";
        bk.innerHTML += "Title: " + item.title + "<br />" + 
        "Author : " +item.author
        + "<br />" + item.pages + " pages";

        library.appendChild(bk);
    }
}

window.onload = function() {
    genBookCard();
};
