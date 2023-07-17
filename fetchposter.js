const postersPeliculas = [
    "https://www.omdbapi.com/?apikey=8645057e&t=Back+to+the+future",
    "https://www.omdbapi.com/?apikey=8645057e&t=Star+Wars",
    "https://www.omdbapi.com/?apikey=8645057e&t=Revenge+of+the+Nerds",
    "https://www.omdbapi.com/?apikey=8645057e&t=Police+Academy",
    "https://www.omdbapi.com/?apikey=8645057e&t=Avatar"
];


fetch(postersPeliculas[Math.floor(Math.random() * 5)])
    .then(response => response.json())
    .then(data => {
        const posterPelicula = data.Poster;
        document.querySelector("#poster img").src = posterPelicula;
    });
