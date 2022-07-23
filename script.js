const baseUrl = "https://ghibliapi.herokuapp.com/films"

const searchDiv = document.getElementById("searchContainer")
const containerDiv = document.getElementById("container")


fetch(baseUrl)
.then(res => res.json())
.then(films => {
    console.log(films)
})
.catch(error => (console.log(`Error: ${error}`)))

films.results.forEach(films => {
        makeFilmDiv(image, movie, divForInfo)
})

getFilmResults = () => {
    const searchInput = getElementById("search")

    fetch(`https://ghibliapi.herokuapp.com/films${searchInput}`)
    .then(res => res.json())
    .then(films => {
        console.log(films)
    })
    .catch(error => (console.log(`Error: ${error}`)))

    films.results.forEach(films => {
        makeFilmDiv(image, movie, divForInfo)
    })

    searchInput.value = ""
}

const makeFilmDiv = (image, movie, divForInfo) => {
    const filmDiv = document.createElement('div')

    const filmPic = document.createElement('img')
    const filmName = document.createElement("h3")

    filmPic.src = image
    filmName = movie
    
    filmDiv.appendChild(filmPic)
    filmDiv.appendChild(filmName)

    divForInfo.appendChild(filmDiv)
}