"use strict";
//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...

function slideshow(){
   let request = new XMLHttpRequest()

request.open('GET', 'https://aws.random.cat/meow', true);
request.onload = function() {
  // Begin accessing JSON data here
  let data = JSON.parse(this.response);

  document.getElementById("photo").src = data.file;
}
request.send(); 
}

setInterval(slideshow, 1000);