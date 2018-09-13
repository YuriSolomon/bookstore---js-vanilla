getData();

function getData() {
    fetch("https://api.myjson.com/bins/8zpvs", {})
        .then(response => response.json())
        .then(realData => {

            var data = realData;
            console.log(data);

            getBooks(data);
        })
}

function getBooks(data) {
    var template = "";
    data.books.forEach(book => {
        template += `
                    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
	                    <div class="flipper">
		                    <div class="front">
                                <img class="book" src=${book.cover} alt="cover"/>
		                    </div>
		                    <div class="back container">
                                <h3 class="row align-items-center" style="height:80px">${book.title}</h3>
                                <p class="row" style="height:210px">${book.description}</p>
                                <a rel="gallery" href=${book.detail} class="swipebox row justify-content-center" style="height:50px" title="My Caption">
                                    <img class="readMore" src="button-more-info.jpg" alt="cover">
                                </a>
                                <p class="row align-items-end" style="height:90px">Language: ${book.language}</p>
		                    </div>
	                    </div>
                    </div>
                    `
        document.getElementById("newBook").innerHTML = template;
    });
}

function search() {

    let searchValue = document.getElementById("myInput");
    let allBooks = Array.from(document.getElementsByClassName("flip-container"));

    allBooks.forEach(item => {
        var match = item.innerHTML.toUpperCase().includes(searchValue.value.toUpperCase());

        if (match) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
        
    })
    console.log(searchValue.value);
}