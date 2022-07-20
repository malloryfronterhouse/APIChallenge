const baseUrl = "https://ghibliapi.herokuapp.com"
const containerDiv = document.getElementById("container")

const searchDiv = document.getElementById("searchContainer")

const peepName = 

fetch(baseUrl)
.then (res => res.json())
.then(data => {
    console.log(data.results)

    data.results.forEach()
})