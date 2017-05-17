const md5 = require('md5');
const axios = require('axios');
var http = require("http");
var https = require("https");

console.log(md5(((('ivanhabi2@gmail.com').trim()).toLowerCase())))


exports.printMsg = function() {
  console.log("This is a message from the demo package");
}

// axios.get('https://en.gravatar.com/80bd25965a9f89965dc7bdf7fd9f6c2b.json')
// .then(function(response){
//   console.log(response);
// })

axios.get('https://en.gravatar.com/avatar/80bd25965a9f89965dc7bdf7fd9f6c2b')
.then(function(response){
  console.log(response);
})

this.printMsg()
