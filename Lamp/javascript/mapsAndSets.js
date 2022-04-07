/*let map= new Map();

map.set('one',"keerthu");
map.set(1,'one');//keys are not converted to string
map.set('1',2);

console.log(map.get(1));
console.log(map.get('one'));

console.log(map.size);

let details={name:'keerthana',age:22};
console.log(map.set(details,1234567));
console.log(map.get(details));

//chaining

map.set('key','value').set('property','value');
console.log(map);

for(let key of map.keys()){//keys
    console.log(key);
}
for(let values of map.values()){//values
    console.log(values);
}
for(let item of map){//key and values
    console.log(item);
}
map.forEach((value,key)=>{
    console.log(key+":"+value);//one:keerthu   1:one   1:2  [object Object]:1234567  key:value  property:value   
    return 1;
});*/



/*sets
let sets = new Set([1,2,3,2,'kiki']);
sets.add('hi');
sets.add(12);
console.log(sets);
console.log(sets.size);
console.log(sets.delete(3));
sets.forEach((value1,value2)=>console.log(value1+" "+value2));
*/


/*
function unique(arr) {
    return Array.from(new Set(arr));
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log( unique(values) );

*/

  function aclean(arr) {
    let map = new Map();
  
    for (let word of arr) {
      // split the word by letters, sort them and join back
      let sorted = word.toLowerCase().split('').sort().join(''); // (*)
      map.set(sorted, word);
    }
  
    return Array.from(map.values());
  }
  
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
  console.log( aclean(arr) );