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
                                <h3>${book.title}</h3>
                                <p>${book.description}</p>
                                <p>Language: ${book.language}</p>
                                <a rel="gallery" href=${book.detail} class="swipebox" title="My Caption">
                                <img class="readMore" src="button-more-info.jpg" alt="cover">
                                </a>
		                    </div>
	                    </div>
                    </div>
                    `
        document.getElementById("newBook").innerHTML = template;
    });
}