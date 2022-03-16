/* function declaration
 *function with no return value also returns undefined
 */

function showMessage(){
    console.log("printed");
}
showMessage();


// function expression
// in js function expression is a value
let func= function(){
    console.log("function func");
}
func();
let duplicate=func;
duplicate();

// default parameter
function defaultPara(mes,text="hi"){
    console.log(mes+" "+text);
}
defaultPara("ann");
defaultPara("Oky","Bye");

//callbacks - functions passed as a parameter
// okay and nope are call functions
function callback(ques,yes,no){
  
    if(ques==0){
        yes();
    }
    else{
        no();
    }
}
function okay(){
    console.log("All set");
}
function nope(){
    console.log("failed");
}
callback(1,okay,nope);
callback(0,okay,nope);


// callback using function expression
function callback(ques,yes,no){
  
    if(ques==0){
        yes();
    }
    else{
        no();
    }
}
callback(1,function(){console.log("All done");},function(){console.log("Nothing is done");});



function wrapValue(n){
    let local = n;
    return ()=>local;
}
let wrap1=wrapValue(1);
let wrap2= wrapValue(2);
console.log(wrap1());// ()=>local gets stored in wrap1.
console.log(wrap2);



function multiplier(fact){
    console.log(fact);
    return n =>n*fact;
}
let twice = multiplier(5);
console.log(twice);
console.log(twice(2));
