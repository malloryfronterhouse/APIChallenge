const baseUrl = "https://ghibliapi.herokuapp.com/films"

const searchDiv = document.getElementById("searchContainer")
const containerDiv = document.getElementById("container")


fetch(baseUrl)
.then(res => res.json())
.then(films => {
    console.log(films)
})
.catch(error => (console.log(`Error: ${error}`)))


getFilmResults = () => {
    const searchInput = document.getElementById("search")

    fetch(`https://ghibliapi.herokuapp.com/films${searchInput}`)
    .then(res => res.json())
    .then(films => {
        console.log(films)
    })
    .catch(error => (console.log(`Error: ${error}`)))

    films.results.forEach(films => {
        makeFilmDiv(image, movie, divForInfo)
    })

    searchContainer.appendChild(getFilmResults)

    searchInput.value = ""
}

const makeFilmDiv = (image, movie, divForInfo) => {
    const filmDiv = document.createElement('div')

    const filmPic = document.createElement('img')
    const title = document.createElement("h3")

    filmPic.src = image
    title.textContent = movie
    
    filmDiv.appendChild(filmPic)
    filmDiv.appendChild(title)

    divForInfo.appendChild(filmDiv)

    films.results.forEach(films => {
        makeFilmDiv(image, movie, divForInfo)
})
}