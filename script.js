const baseUrl = "https://ghibliapi.herokuapp.com/films"
const containerDiv = document.getElementById('container')

const searchDiv = document.getElementById('searchContainer')


fetch(baseUrl)
.then(res => res.json())
.then(data => {
    console.log(data)
    data.forEach(film => {
        makeFilmDiv(film.image, film.title, film.description, containerDiv)
    });
})
// .catch(error => (console.log(`Error: ${error}`)))


/*getFilmResults = () => {
    const searchInput = document.getElementById("search")

    fetch(`https://ghibliapi.herokuapp.com/films${searchInput}`)
    .then(res => res.json())
    .then(films => {
        console.log(films)
    })
    .catch(error => (console.log(`Error: ${error}`)))


    searchInput.value = ""
} */

const makeFilmDiv = (image, title, description, divForInfo) => {
    const filmDiv = document.createElement('div')
    const filmPic = document.createElement('img')
    const filmTitle = document.createElement("h3")
    const filmDescription = document.createElement('p')

    filmPic.src = image
    filmPic.style = "height: 600px; width: auto;"
    filmTitle.textContent = title
    filmTitle.style = "color: aqua; font-size: 2.25rem;"
    filmDescription.textContent = description
    filmDescription.style = "color: lightpink; font-size: 1.5rem; text-align: center;"
    
    filmDiv.appendChild(filmPic)
    filmDiv.appendChild(filmTitle)
    filmDiv.appendChild(filmDescription)

    divForInfo.appendChild(filmDiv)

}