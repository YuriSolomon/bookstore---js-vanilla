getData();

function getData() {
    fetch("https://api.myjson.com/bins/8zpvs", {
    })
    .then(response => response.json())
    .then(realData => {

        var data = realData;
        
        console.log(data);
        
        getBooks(data);
    })
}

function getBooks(data) {
    let bookDivs = document.querySelector('#newBook')
    data.books.forEach(book => {
        let newBook = document.createElement('div');
        newBook.classList.add("book");
        let newImg = document.createElement("IMG");
        newImg.setAttribute("src", book.cover);
        newBook.append(newImg);
        bookDivs.append(newBook);
        // bookDivs.append(newImg);
    });
    
}