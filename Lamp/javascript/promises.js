/*let done=true;
let Prom = new Promise(function(resolve,reject){
    if(done){
        console.log(resolve("success"));//undefined
        console.log("after success");
    }
    else{
        reject("failure");
    }
})
*/
new Promise((resolve, reject) => {
    console.log('Initial');
    reject();
})
.then(() => {
    //throw new Error('Something failed');

    console.log('Do this');
})
.catch(() => {
    console.error('Do thatw');
})
.catch(() => {
    console.error('Do that');
})
.then(() => {
    console.log('Do this, no matter what happened before');  
});

