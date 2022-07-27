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
    let dataUrl = `https://ghibliapi.herokuapp.com/films/?title=${searchInput.value}`
    
    
    fetch(`https://ghibliapi.herokuapp.com/films/?title=${searchInput.value}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        makeFilmDiv(data[0].image, data[0].title, data[0].description, searchDiv)
    })
    .catch(error => (console.log(`Error: ${error}`)))
    
    if (film => film.title === searchInput.value) {
        console.log(dataUrl)
    } else {
        console.log("Error! Try again!")
    }
    // document.getElementById('container').innerHTML = makeFilmDiv()
}

document.getElementById("button").onclick = function() {getFilmResults()}

const makeFilmDiv = (image, title, description, divForInfo) => {
    const filmDiv = document.createElement('div')
    const filmPic = document.createElement('img')
    const filmTitle = document.createElement("h3")
    const filmDescription = document.createElement('p')
    
    filmPic.src = image
    filmPic.style = "height: 600px; width: auto;"
    filmTitle.textContent = title
    filmTitle.style = "color: #394063; font-size: 2.25rem;"
    filmDescription.textContent = description
    filmDescription.style = "color: #B97B77; font-size: 1.5rem; text-align: center;"
    
    filmDiv.appendChild(filmPic)
    filmDiv.appendChild(filmTitle)
    filmDiv.appendChild(filmDescription)

    divForInfo.appendChild(filmDiv)
}
