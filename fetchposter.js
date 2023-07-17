postersPeliculas = [];
url1 = "https://www.omdbapi.com/?apikey=8645057e&t=Back+to+the+future";
url2 = "https://www.omdbapi.com/?apikey=8645057e&t=Star+Wars";
url3 = "https://www.omdbapi.com/?apikey=8645057e&t=Revenge+of+the+Nerds";
url4 = "https://www.omdbapi.com/?apikey=8645057e&t=Police+Academy";
url5 = "https://www.omdbapi.com/?apikey=8645057e&t=Avatar";

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

numeroRandom = randomNumber(1, 5)
let enlace = url.numeroRandom;

fetch(enlace)
    .then(response => response.json())
    .then(data => {
        postersPeliculas = data.Poster;
        document.querySelector("#poster img").src = postersPeliculas;
    });
/*
fetch('https://www.omdbapi.com/?apikey=8645057e&t=Top+Gun')
    .then(response => response.json())
    .then(data => {
        postersPeliculas2 = data.Poster;
    });

fetch('https://www.omdbapi.com/?apikey=8645057e&t=Star+Wars')
    .then(response => response.json())
    .then(data => {
        postersPeliculas3 = data.Poster;
    });

fetch('https://www.omdbapi.com/?apikey=8645057e&t=Revenge+of+the+Nerds')
    .then(response => response.json())
    .then(data => {
        postersPeliculas4 = data.Poster;
    });
fetch('https://www.omdbapi.com/?apikey=8645057e&t=Police+Academy')
    .then(response => response.json())
    .then(data => {
        postersPeliculas5 = data.Poster;
    });
fetch('https://www.omdbapi.com/?apikey=8645057e&t=Avatar')
    .then(response => response.json())
    .then(data => {
        postersPeliculas6 = data.Poster;
    }); 

    document.querySelector("#poster img").src = postersPeliculas;
    */