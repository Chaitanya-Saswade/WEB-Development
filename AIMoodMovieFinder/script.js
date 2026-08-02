const buttons = document.querySelectorAll("button")
    //Here buttons are Data of Array i.e Store Multiple Buttons

const moviesContainer = document.getElementById("movies-container")

buttons.forEach(btn => {
    btn.addEventListener('click', () => {

        const mood = btn.dataset.mood;

        fetchMovie(mood)
    });
});

// Task-2 To Get the movies on the basis of Mood Value

async function fetchMovie(movieName) {

    moviesContainer.innerHTML = "<h2>Loading.....</h2>";

    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=fee02d16&s=${movieName}`;

    const response = await fetch(url)
    const data = await response.json()

    displayMovie(data.Search)

}


function displayMovie(movies) {

    moviesContainer.innerHTML = "";

    movies.forEach(movie => {

        const card = document.createElement("div")

        card.classList.add("movie-card")

        card.innerHTML = ` 
        <img src = "${movie.Poster}" >

        <div class = "movie-info">
        <h3> ${movie.Title} </h3> 
        <p> ${movie.Year} </p> 
        </div>
    `;

        moviesContainer.appendChild(card)
    })
}