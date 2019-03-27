"use strict";

//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
var div = document.getElementById('mydiv');

function blue() {
    div.setAttribute('id', 'bluediv');
}

function red() {
    div.setAttribute('id', 'reddiv');
}

function green() {
    div.setAttribute('id', 'greendiv');
}