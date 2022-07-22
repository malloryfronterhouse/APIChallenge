const baseUrl = "https://ghibliapi.herokuapp.com"

const searchDiv = document.getElementById("searchContainer")
const containerDiv = document.getElementById("container")

fetch("https://ghibliapi.herokuapp.com")
.then(res => res.json())
.then(data => {
    console.log(data)
})
.catch(error => console.log(error))