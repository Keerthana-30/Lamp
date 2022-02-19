/* first we are importing the 'fs' module then we are reading the file asynchronously using readFile()
* where the request is got by the thread and then the thread moves on to the next request
* which is a synchronous readFileSync() method since it is synchronous it prints the data first 
* then it movies to the next request and gets it and so on..
* once those requests are finished it stores it in the stack and then it returns it using callback functions. 
*/
var fs = require('fs');
fs.readFile('Nodejsdoc.txt', 'utf-8', function (error, data) {
    console.log(data);
})

var data = fs.readFileSync('Nodejsdoc.txt');
console.log("data = " +data);
console.log("-------------------------------");


fs.writeFile('Nodejsdoc1.txt', '*****console.log("hello")********', function (err) {
    console.log("a new file is created");
})
/*fs.writeFile('Nodejsdoc.txt', '*****console.log("hello")********', function (err) {
    console.log("data is overwritten");
})*/

fs.appendFile('Nodejsdoc.txt', '\n*****console.log("hello")********', function (err) {
    console.log("data is appended");
})

/*fs.unlink('Nodejsdoc1.txt', function (error) {
    console.log("file deleted");
})*/