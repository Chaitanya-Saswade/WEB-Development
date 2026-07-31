const buttons = document.QuerySelectorAll("button")
    //Here buttons are Data of Array i.e Store Multiple Buttons

const moviesContainer = document.getElementbyId("movies-container")

buttons.forEach(btn => {
    btn.addEventlistener('click', () => {

        const mood = btn.dataset.mood;

        fetchMovie(mood)
    });
});

//To Get the movies on the basis of Mood Value