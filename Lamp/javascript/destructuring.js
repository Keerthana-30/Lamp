//destructuring -  spliting of items in array or objects and assigning them to the variables
let arr = [1,2,3,4,5,6];
let [one,two,three,,five]=arr;// assigning each items in the array to the variables and using comma we can skip the elements
console.log(one+" "+two+" "+three+" "+five);
console.log(arr);



//object destructuring
let obj = {
    name:"keerthana",
    age:"21"
};
[obj.food, obj.hobby] = "noodles cooking".split(' ');

console.log(obj.name);
console.log(obj.food);
console.log(obj);


let obj1 = {
    firstname: "tinu",
    surname: "meha"
},
firstname = "liya",
surname = 'hin';
[firstname,surname]=[surname,firstname];
console.log(firstname+" "+surname);


function outputInfo(value) {
    console.log(value === obj1);
    console.log(value);
}

outputInfo({ firstname, surname,middlename} = obj1);       

console.log(firstname);    
console.log(surname); 
console.log(middlename);// undefined