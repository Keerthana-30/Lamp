/* hoisitng -  moving the declarations to the top of the scope
* variables,functions,classes are hoisted , lets us use the functions before declaring it
*/


// function hoisitng
hoist("hello");// calling the function before declarations

function hoist(meassage){
    console.log(meassage);
}


// variable hoisitng
console.log(num); // undefined var num is hoisted 
var num=19;

// to overcome var's hoisting block level binidng(lexcial scoping) ie,let and const was found
console.log(number);//error - let and const not hoisted
let number=100; 


const value=300;
//value=23; // error - cannot reassign to constant variable
console.log(value);

const obj={1:"hi",2:"kiki"}
// obj={1:"hloo"}; // error
obj[1] ="hello";
console.log(obj);