let set = new Set([1,4,5,2,2,2]);
set.add("hi");
set.add({"5": 'kilo', 'gm': 90});
set.add(5);// duplicate is ignored
console.log(set); //  { 1, 4, 5, 2, 'hi', { '5': 'kilo', gm: 90 } }
console.log(set.has('hi'));//true
set.delete(1);
console.log(set);//{ 4, 5, 2, 'hi', '5' }
//set.clear();
//console.log(set);//{}
set.forEach((value, key) => console.log(value + " " + key));
let array1 = [set];
array1.push('hi');
console.log(array1);//[ Set(5) { 4, 5, 2, 'hi', { '5': 'kilo', gm: 90 } }, 'hi' ]
console.log(array1[0]);//{ 4, 5, 2, 'hi', { '5': 'kilo', gm: 90 } }
console.log([...array1[0]]);//[ 4, 5, 2, 'hi', { '5': 'kilo', gm: 90 } ]
console.log(array1);
let array = [...set];//converting into array
console.log(array);//[ 4, 5, 2, 'hi', { '5': 'kilo', gm: 90 } ]
console.log(array[4].gm)//90


//weaksets
//cannot be used in a for-of loop
//do not expose any iterators, do not have a forEach() method,do not have a size property.
let key1 = {},
    key2 = { '90': 'ninety' }, // only objects are allowed in weaksets,can’t accept primitive values
    weakSet = new WeakSet([key1, key2]);

console.log(weakSet.has(key1));     // true
console.log(weakSet.has(key2));   //true



//Maps
let map = new Map([["name","niko"],["age",90]]);
map.set("title", "Understanding ES6");
map.set("year", 2016);

console.log(map.get("name"));//niko
console.log(map.get("age"));//90s
console.log(map.get("title"));      // "Understanding ES6"
console.log(map.get("year"));       // 2016