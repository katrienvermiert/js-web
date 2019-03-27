"use strict";

//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...

let name ;
let power ;
let motive ;
let plan ;

function myReset(){
    document.getElementById("myForm").reset();
}

function myDisplay(){
    name = document.SVAF.vill.value;
    power = document.SVAF.pow.value;
    motive = document.SVAF.mot.value;
    plan = document.SVAF.plan.value;

    document.getElementById('myForm').innerHTML = "Your super villain name is: " + name + "." + "<br>" + "Your super power is: " + power + 
    "." + "<br>" + "Your motive is: " + motive + "." + "<br>" + "Your plan to conquer the world is: " + plan + ".";
}