/*const oranges = ['orange', 'orang vbhfjfe','orange']
const apples = ['just one apple']
oranges.forEach(fruit => {
    console.count(fruit)//t console.count() will count the number of times a string is printed, and print the count next to it
})
apples.forEach(fruit => {
    console.count(fruit)
})

console.countReset('orange')// resets the value counter to zero.
console.time('doSomething()')
oranges.forEach(fruit => {
    console.count(fruit)
})
console.timeEnd('doSomething()')*/

/*
const doSomething = () => console.log('test')
const measureDoingSomething = () => {
  console.time('doSomething()')
  //do something, and measure the time it takes
  doSomething()
  console.timeEnd('doSomething()')
}
measureDoingSomething()*/

var http = require('http'); // to get the module we want to use
var fs = require('fs');
var calculation = require('./calculation');// gets the reference of calculation.js file and stores it in calucation variable. 
http.createServer(function (req, res) {
    res.write("welcome");
    result = calculation.add(10, 5);// accessing the add function in calculation.js file(module)
    res.write('\n');
    res.write("addition:" + String(result));


    var data = fs.readFileSync('Nodejsdoc.txt');
    res.write(data);
    res.write("\n******************");
   
   
    result = calculation.sub(10, 5);
    res.write('\n');
    res.write("subtraction:" + String(result));
    res.end();
}).listen(9000)// port number

