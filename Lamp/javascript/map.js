/*map - a new array is created with each element being the result of the callback fun.
 * return type - a new array
 * parameters - element,value,array
*/
let arr =['bat','ball','shoes','racket'];
let arr1=arr.map((elements) => {console.log(elements);return elements;});
let arr2=arr.map((elements)=>elements+'1');
console.log(arr1);
console.log(arr2);
console.log(arr);

let StartsWithArr=arr.map((value,index)=>{
    if(value.startsWith('b')){
        return ({[index]:value});//dbt
    }
    else{
        return 0;
    }
})
console.log(StartsWithArr);

let deleteArr = arr.map((value,index)=>{
    if(index==2){
        console.log("the removed elements is : "+ arr.shift());
    }
    console.log(value);
    return value;
})
console.log(deleteArr);
console.log(arr);