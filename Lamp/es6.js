let count=5;
if(true){
    //console.log(count);//thors an error
    let count=6;//6 does not show an error
    const value=10;
    //value=9;thows error
    console.log(count);
    console.log(value);
    //let count=7;//show error

    const msg="hi this is lolly";
    
    console.log(msg.includes('is'));//true
    console.log(msg.startsWith('this'));//false
    console.log(msg.endsWith('lly'));//true
    console.log(msg.includes('is',10));//false
    console.log(msg.startsWith('this',4));//false
    console.log(msg.endsWith('lly',4));//false
    console.log(msg.indexOf(i));//1
    console.log(msg.lastIndexOf(i));//8
    let name = "Nicholas",
    message = `Hello, ${name}.`;
    console.log(message);//"Hello, Nicholas."

}
console.log(count)//5

function mixArgs(first, second = "b") {
    console.log(arguments.length);//1 because only one argument is pased.
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
    first = "c";
    second = "d"
    console.log(first === arguments[0]);//false  because in ecma6 arguments value does not change when we the change  the variable value,it behvaes like strict modein ecma5.
    console.log(second === arguments[1]);// false  //arguments to always reflect the initial call state. in es6
}

mixArgs("a");


//rest parameter - cannot be used with 'use strict' in function and should always be the last parameter.
//but can be used when 'use strict' is outside the function.
//used in function definition
function checkArgs(value,...args) {
    console.log(args.length);//3
    console.log(arguments.length);//4 The arguments object always correctly reflects the parameters that were passed into a function regardless of rest parameter usage.
    console.log(args[0], arguments[0]);//b a
    console.log(args[1], arguments[1]);//c b
}

checkArgs("a", "b","c","d");

//spread operator - used in function calls
function myBio(firstName, lastName, company) {
    return {`${firstName} ${lastName} runs ${company}`
             };
  }
  
  console.log(myBio(['Oluwatobi', 'Sofela', 'CodeSweetly']));//Oluwatobi,Sofela,CodeSweetly undefined runs undefined
  console.log(myBio(['Oluwatobi', 'Sofela', 'CodeSweetly'],...['ko','u']));//Oluwatobi,Sofela,CodeSweetly ko runs u
  console.log(myBio(['Oluwatobi', 'Sofela', 'CodeSweetly'],'ci','dd','pi'));//Oluwatobi,Sofela,CodeSweetly ci runs dd
 console.log(myBio(...['Oluwatobi', 'Sofela', 'CodeSweetly','pi']));//Oluwatobi Sofela runs CodeSweetly - spread operator omits the remaining values.
 
 
function myName(){
     return arguments[0];//ivy
 }
 console.log(myName('ivy','sofela'));


 var lastName="last name";
 var obj={
     "first name":"hema",
     [lastName]:"jilo"
 };
 console.log(obj["first name"]);//hema
 console.log(obj[lastName]);//jilo
 console.log(obj["last name"]);//jilo
