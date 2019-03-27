"use strict";
//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
let i = 0;
let photos = [];
let time = 1000;

photos[0] = "images/catainamerica.jpg";
photos[1] = "images/doctorwhocat.jpg";
photos[2] = "images/jokercat.jpg";
photos[3] = "images/leiacat.jpg";
photos[4] = "images/linkcat.jpg";
photos[5] = "images/mariocat.jpg";
photos[6] = "images/mcflycat.jpg";
photos[7] = "images/minioncat.jpg";
photos[8] = "images/pikacat.jpeg";
photos[9] = "images/pottercat.jpg";
photos[10] = "images/trumpcat.jpg";
photos[11] = "images/turtlecat.jpg";

function slideShow(){
    document.photo.src = photos[i];

    if(i < photos.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("slideShow()", time);

}

window.onload = slideShow;



