/* filter - creates a new array with the elements that passess the test
   return type - an array conataining the elements that passed the test or en empty array 
   */

let arr=['veil','89',89,'*(())',9.9868];

let filteredArr = arr.filter((value) => value==89 );
console.log(filteredArr);

console.log([34,45,234,46,123,,345].filter((value)=>value%2==0));
