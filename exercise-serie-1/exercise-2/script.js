"use strict";
//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
var num1 ;
var num2 ;
var res ;

function sum(){
    num1 = Number(document.calculator.txtnum1.value);
    num2 = Number(document.calculator.txtnum2.value);
    res = num1 + num2;
    document.calculator.txtres.value = res;
}
function difference(){
    num1 = Number(document.calculator.txtnum1.value);
    num2 = Number(document.calculator.txtnum2.value);
    res = num1 - num2;
    document.calculator.txtres.value = res;
}
function product(){
   num1 = Number(document.calculator.txtnum1.value);
   num2 = Number(document.calculator.txtnum2.value);
   res = num1 * num2;
   document.calculator.txtres.value = res;
}
function quotient(){
    num1 = Number(document.calculator.txtnum1.value);
    num2 = Number(document.calculator.txtnum2.value);
    res = num1 / num2;
    document.calculator.txtres.value = res;
}

function myReset() {
    document.getElementById("myForm").reset();
}
