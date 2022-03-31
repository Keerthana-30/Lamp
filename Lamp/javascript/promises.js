let done=true;
let Prom = new Promise(function(resolve,reject){
    if(done){
        console.log(resolve("success"));//undefined
        console.log("after success");
    }
    else{
        reject("failure");
    }
})