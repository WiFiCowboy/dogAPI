"use strict";

let dogValue = 0;

function getDogImage() {
  fetch("https://dog.ceo/api/breeds/image/random/" + dogValue)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => console.log("Something went wrong. Try again later."));
}

function displayResults(responseJson) {
  console.log(responseJson);
}

function watchGetForm() {
  $("#getDogs").submit(event => {
    event.preventDefault();
    dogValue = $(".howManyDogs").val();
    getDogImage();
  });
}

function DogAppController() {
  console.log("Script Ready!");
  watchGetForm();

}

$(DogAppController);
