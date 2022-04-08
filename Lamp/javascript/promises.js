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


//delay funciton will be called first then it will return a new promise in which
// resolve is called after 3s, .then will catch the resolve and logs the output
function delay(ms) {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms);
  });
}
  
delay(3000).then(() => console.log('runs after 3 seconds'));

/*
new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000);
  
  }).then(function(result) {
  
    console.log(result); // 1
  ;
    return new Promise((resolve, reject) => { // (*)
      setTimeout(() => resolve(result * 2), 1000);
    });
  
  }).then(function(result) { // (**)
  
    console.log(result); // 2
  
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  
  }).then(function(result) {
  
    console.log(result); // 4
  
  });*/