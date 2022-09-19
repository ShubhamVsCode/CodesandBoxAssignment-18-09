const jokeElement = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

// Joke Api options
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b3f3973b91mshce50510e3d0432dp11b6d1jsn1c11aae71763",
    "X-RapidAPI-Host": "jokeapi-v2.p.rapidapi.com",
  },
};

jokeBtn.addEventListener("click", () => {
  fetch("https://jokeapi-v2.p.rapidapi.com/joke/Any?type=single", options)
    .then((response) => response.json())
    .then((response) => {
      jokeElement.innerHTML = response.joke;
    })
    .catch((err) => console.error(err));
});
