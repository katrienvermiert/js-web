"use strict";

//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
let counter = 0;

document.addEventListener("click", function(){
    counter += 1;

    if(counter == 5){
        alert("way too slow! Keep trying!");
    }

    if(counter == 10){
        alert("Come on! It's not rocket science!");
    }

    if(counter == 15){
        alert("This is getting ridiculous....")
    }

    if(counter == 20){
        alert("OMG you should give up!")
    }
})

let btn = document.getElementById('button');

function moveIt(){
    let newHeight = Math.floor(Math.random() * 350);
    let newWidth = Math.floor(Math.random() * 650);

    btn.style.margin = newHeight + "px" + " " + newWidth + "px";
    console.log(newHeight, newWidth);
}


