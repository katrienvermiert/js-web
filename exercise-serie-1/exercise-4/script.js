"use strict";
//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
function getAge(){
    
    let day = document.getElementById("myDay").value;
    let month = document.getElementById("myMonth").value - 1;
    let year = document.getElementById("myYear").value;

    let today = new Date();
    
    let age = today.getFullYear() - year;

    if(today.getMonth <= month && today.getDate() < day){
        age--;
    }

    document.getElementById('result').innerHTML = 'You are ' + age + ' years old today.';
}
