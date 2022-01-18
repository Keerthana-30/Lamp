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
 
 
 // assign method
"use strict";
 var receiver = {};
Object.assign(receiver,
    {
        type: "js",
        filename: "file.js",
        filename:"filename.js"//In ECMAScript 5 strict mode, the second filename property causes a syntax error. 
        //But in ECMAScript 6, the duplicate property check was removed. Both strict and nonstrict mode code no longer check for duplicate properties.
        //Instead, the last property of the given name becomes the property’s actual value
    },
    {
        type: "css",
        //accessor property
        get name() {
            return "file.js"
        }
    }
);

console.log(receiver.type);     // "css"
console.log(receiver.name);     // "file.js"// accessor property changes to data property in reciever
console.log(receiver); //{type: "css", filename: "file.js", name: "file.js"}
/* -----------------------------------*/

//Enumeration
// numeric keys - ascending order
// string keys - in the order they were added
//for-in loop - unspecified enumeration order
var obj = {
    ak: 10,
    5: 1,
    c: 15,
    4: 1,
    b: 1,
    1: 12
  };
  
  obj.dc = 1;
  
  console.log(Object.getOwnPropertyNames(obj).join(" "));//1 4 5 ak c b dc

/* -----------------------------------*/

//prototype
let person = {
    getGreeting() {//method
        return "Hello";
    }
};
let dog = {
    getGreeting() {
        return "Woof";
    }
};

let friend = Object.create(person);
console.log(friend.getGreeting());   // "Hello"
console.log(Object.getPrototypeOf(friend) === person);  // true

// set prototype to dog
Object.setPrototypeOf(friend, dog);
console.log(friend.getGreeting());                      // "Woof"
console.log(Object.getPrototypeOf(friend) === dog);     // true
/* -----------------------------------*/

/*---------Destructing --------*/
let node = {
    type: "Identifier",
    name: "foo"
};

let { type, name } = node;//the value of node.type is stored in a variable called type and the value of node.
//name is stored in a variable called name 
console.log(type);  // Identifier
console.log(name);//foo


let type = "Literal", name = 5;

/*let type1="literal", name1=5; variable name should be same as property name
({ type1, name1 } = node);
console.log(type1);      // undefined
console.log(name1);//undefined*/


//Before assigning
console.log(type);// "Literal"
console.log(name);//5

// assign different values using destructuring
({ type, name} = node); // console.log({ type, name } = node); = > o/p {type: "Identifier", name: "foo"}
//({type,name,data='hi'}=node); =>  data variable works similarly to default parameter
console.log(type);      // "Identifier"
console.log(name);      // "foo"


//identifier before the colon is giving location,after colon assigns value
let { type: localType, name: localName, value:data ="hi" } = node;//read the property named type and store its value in the localType variable , data variable has default value 'hi'. 
// The variable is assigned its default value because there’s no node.value property.
console.log(localType);// "Identifier"
console.log(localName);//"foo"

/* -----------------------------------*/

/* Nested Destructing*/
let node1 = {
    type1: "Identifier",
    name1: "foo",
    location: {
        start: {
            line: 1,
            column: 1
        },
        end: {
            line: 1,
            column: 4
        }
    }
};

// node1.location.start
let { location: { start }} = node; // before colon - gives location , when '}' is after colon - nested into another level
// let {location : {start:variable_name}}=node ; stored in a new variable called variable_name
console.log(start.line);        // 1
console.log(start.column);      // 1



/*Array Destructing*/
let colors = [ "red", "green", "blue","pink" ];
let [ firstColor, secondColor ] = colors;

console.log(firstColor);        // "red"
console.log(secondColor);       // "green"

let [ , , ,thirdColor ] = colors;
console.log(thirdColor); //"pink"

//nested array destructing
let colors = ['red', ['green', 'lightgreen'], 'blue'];

let [firstColor, secondColor] = colors;

console.log(firstColor); // "red"
console.log(secondColor); //["green", "lightgreen"]
console.log(secondColor[0]); //green
console.log(secondColor[1]); //lightgreen

let [[firstletter, secletter], [secondcolor]] = colors;
console.log(firstletter); //r
console.log(firstletter[0]); //r
//console.log(first[2]);//error
console.log(secletter); //e
console.log(secondcolor); //green
console.log(secondcolor[0]); //g
console.log(secondcolor[2]); //e

console.log([one,...rest]=colors);//["redhhu", Array[2], "blue"]
console.log(rest[0]);//["green", "lightgreen"]
console.log(rest[0][1]);//lightgreen
console.log(rest[1]);//blue
 
 
