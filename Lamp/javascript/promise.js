/* if promise returns successfully resolved is called else reject is called


/*
let done = true

const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = "resolved"
    resolve(workDone)
  } else {
    const why = "rejected"
    reject(why)
  }
})
*/

/*
const fs = require('fs') 

const getFile = () => {
  return new Promise((resolve, reject) => {
    fs.writeFile('promises.txt', '*****console.log("hello")********', function (err) {
      if(err){
        reject (err)
        return
      }
      resolve("created") //passes the request then goes to the next line and prints the err message which is null here
      console.log(err)
    })
    console.log("outside the writefile")
  })
}

getFile()
.then(data => console.log(data))
.catch(err => console.error(err))
*/

let prom = () => { new Promise((resolve, reject) => {
  if(0){
    console.log("resolved");
  }
}).catch(err => {
  console.error(err)
})
}
prom();

