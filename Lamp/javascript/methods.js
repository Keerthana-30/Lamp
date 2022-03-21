/*let user = {
    name: "John",
    age: 30,
    sayHi() {
      console.log( this.name );
    }
  };


let admin = user;
console.log(admin);
admin.name="kiki"
console.log(user);
admin.sayHi();
user.sayHi();
*/

let user = { name: "keerthana" };
let admin = { name: "Admin" };

function sayHi() {
  console.log( this.name );
}

// use the same function in two objects
user.fun = sayHi;
admin.fun = sayHi;

console.log(user);//{ name: 'keerthana', fun: [Function: sayHi] }
console.log(admin);//{ name: 'Admin', fun: [Function: sayHi] }

// these calls have different this
// "this" inside the function is the object "before the dot"
user.fun(); // keerthana (this == user)
admin.fun(); // Admin  (this == admin)