// const fs = require('fs')
// fs.writeFileSync("hello.txt", "Hello fs method 1 ")

const fs = require('fs').writeFileSync;
fs("abc.txt", "Hello fs method 2")

console.log(__dirname)
console.log(__filename)

// fs -> non global module, kyuki ise import krna pdta h
// console -> global module, kyuki ise import ni krna padta