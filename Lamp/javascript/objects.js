let user={
    name:"keerthana",
    age:21
};


console.log(user.name +" "+user.age);

user["favourite food"]="noodles"; //multi word property must be quoted
console.log(user);

function object(){
    user["for"]="me";
    for(let key in user){
        console.log(key);
    }
    return user;
}
let obj1 = object();
console.log(obj1);
console.log("age" in obj1);//true
delete obj1.for;
console.log("for" in obj1);


let user1={
    hobbies:['painting','writing','reading'],
    sportsperson:"No"
}
console.log(user1.hobbies);
console.log(user1.sportsperson);
console.log(user1.hobbies[2]);
console.log(Object.keys(user1));// returns the keys in the object

let user2 = [
    {book:["inferno","dan"],
     read:"yes"
    },
    {book:['origin',"dan"],
    read:"no",
    }
]

console.log(user2);
console.log(user2[0]);
console.log(user2[1].book);
console.log(user2[1].book[0]);
user2[1].book[2]={1:"A",2:"B"}
console.log(user2[1]);

