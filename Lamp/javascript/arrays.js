let array=[];
let arr= new Array();
//console.log(arr);
//console.log(array);
arr['key']='ko';
console.log(arr);

console.log(arr.push(90));
console.log(arr);

console.log(arr.push(0));
console.log(arr);
console.log(arr[2]);//undefined

arr.shift();//removes an element from the first
console.log(arr);

arr.unshift('dom');//adds in the first
console.log(arr);

//dont use in array
for(elem in arr){ //gives the index
    console.log(elem +" "+arr[elem]);
}//0 dom    1 0    key ko



for(elem of arr){ // gives the property values ie the values in the array 
    console.log(elem); // dom 0
}

arr.length=0;//clears the entire array but [ key: 'ko' ] 
console.log(arr);
console.log(arr.length);//0




let styles=["jazz","BLues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length)/2)]='classic';
styles.shift();
styles.unshift('Rap','Reggae');
console.log(styles);

//splice - returns the array of the removed element
let spli=['hi','89',67,'noni'];
console.log(spli.splice(1,1,'hloo','morning'));//1=> start index 1=>no of elements to delete 'hloo' and 'morning' =>elements to be added
//without deleting also we can insert the element. set the delete count to 0
console.log(spli);