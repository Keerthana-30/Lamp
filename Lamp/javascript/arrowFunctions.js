// arrow functions - an alternative to function expression shorthand 
//default parameters,rest destructurig are supported in arrow functions
//default
var arrow = (data=10) =>{
    console.log(`hi ${data}`);

}
arrow();

// rest operator
var arrow1 = (value1,value2,...valRest)=>{
    console.log(value1+" "+value2+" "+valRest);
    console.log(valRest[0])
}

console.log(arrow1(1,2,8,89,'ji'))

//destructuring 
let User = class MyClass {
    sayHi() {
     console.log(MyClass) // MyClass name is visible only inside the class
    }
  };
  
  new User().sayHi(); // works, shows MyClass definition
  
  //console.log(MyClass); 