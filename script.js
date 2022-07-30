const baseUrl = "https://ghibliapi.herokuapp.com/films"
const containerDiv = document.getElementById('container')

const searchDiv = document.getElementById('searchContainer')

let button = document.getElementById('button')



fetch(baseUrl)
.then(res => res.json())
.then(data => {
    console.log(data)
    data.forEach(film => {
        makeFilmDiv(film.image, film.title, film.description, containerDiv)
    });
})


function getFilmResults() {

    let searchInput = document.getElementById('search')

    fetch(`https://ghibliapi.herokuapp.com/films/`)
    .then(res => res.json())
    .then(data => {
        const filmResult = data.filter(film => film.title.toLowerCase().includes(searchInput.value.toLowerCase()))
        console.log(filmResult)
        makeFilmDiv(filmResult[0].image, filmResult[0].title, filmResult[0].description, searchDiv)
    })
    .catch(error => (console.log(`Error: ${error}`)))
    
    searchDiv.innerHTML = ""
}

document.getElementById("button").onclick = function() {getFilmResults()}

const makeFilmDiv = (image, title, description, divForInfo) => {
    const filmDiv = document.createElement('div')
    const filmPic = document.createElement('img')
    const filmTitle = document.createElement("h3")
    const filmDescription = document.createElement('p')
    
    filmPic.src = image
    filmPic.setAttribute("class", "apiImages")
    filmPic.style = "height: 400px; width: auto; display: block; margin-left:auto; margin-right: auto; margin-top: 50px;"
    filmTitle.textContent = title
    filmTitle.style = "color: #394063; font-size: 2.25rem; text-align: center; margin-top: 50px; text-shadow: .5px .5px .5px black;"
    filmDescription.textContent = description
    filmDescription.style = "color: #B97B77; font-size: 1.25rem; text-align: center; padding: 40px; text-shadow: .75px .75px .75px black;"
    
    filmDiv.appendChild(filmPic)
    filmDiv.appendChild(filmTitle)
    filmDiv.appendChild(filmDescription)

    divForInfo.appendChild(filmDiv)
}
