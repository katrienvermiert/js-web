"use strict";

//Check to see if script is linked properly.
console.log("This script is linked properly!");


//Write your JS code here...

let images = ["catainamerica.jpg",
"doctorwhocat.jpg",
"jokercat.jpg",
"leiacat.jpg",
"linkcat.jpg",
"mariocat.jpg",
"mcflycat.jpg",
"minioncat.jpg",
"pikacat.jpeg",
"pottercat.jpg",
"trumpcat.jpg",
"turtlecat.jpg"];

function showImages(){
    let image = document.getElementById('img');
    image.innerHTML = " ";
    for (let i = 0; i < images.length; i++) {
        // create the image element
        let imageElement = document.createElement('img');
        imageElement.setAttribute('src', images[i]);
        imageElement.className = "responsive";
        // append the element to the container
        image.append(imageElement);
    }
}

function shuffle(){
    showImages();
   
    for (let i = images.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = images[i];
    images[i] = images[j];
    images[j] = temp;
    }
}
