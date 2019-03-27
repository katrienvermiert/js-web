"use strict";
//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...

let request = new XMLHttpRequest;

request.open(GET, 'https://api.punkapi.com/v2/beers' , true);
request.onload = function(){
    let data = JSON.parse(this.response);

    if(request.status >= 200 && request.status < 400){
        data.forEach(beer => {

            const card = document.getElementById('row')

            const cardcontainer = document.createElement('div')
            cardcontainer.setAttribute('class', 'container')

            const title = document.createElement('h2')
            title.textContent = beer.name
            )
        });
}