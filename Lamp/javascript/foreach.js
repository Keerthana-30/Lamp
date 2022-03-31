/* foreach - executes the provided function for each value in the array
* return type- undefined
* cannot be terminated*/
/*let arr=[1,2,3,4,5,6,7,8],count=0;
arr.forEach((element,index)=>{
    console.log("index "+index+" "+element);
    count++;
})
console.log(count);

let return_value=arr.forEach((value,index)=>{
    if(index==4){
        arr[index]=10;
    }
    if(index==5){
        arr[index+2]=11;
    }
    console.log(value);
})
console.log(return_value);//undefined
console.log(arr);*/

const words = ['one', 'two', 'three', 'four'];
words.forEach((word,index) => {
  console.log(word);
  if (word === 'two') {
    words.shift(); //'one' will delete from array
    console.log(index);
    console.log(words);// ['two', 'three', 'four']
  }
}); // one // two // four

console.log(words); // ['two', 'three', 'four']
