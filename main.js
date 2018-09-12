getData();

var template;

function getData() {
    fetch("https://api.myjson.com/bins/8zpvs", {})
        .then(response => response.json())
        .then(realData => {

            var data = realData;
            console.log(data);

            //call books
            let bookDivs = document.querySelector('#newBook')
            data.books.forEach(book => {
                template += `<div>
                        <a class="fancybox" rel="group" href=${book.detail}><img class="book" src=${book.cover} alt="cover" /></a>
                    </div>`

                // bookDivs.append(template);
                document.getElementById("newBook").innerHTML = template;
            });

        })
}