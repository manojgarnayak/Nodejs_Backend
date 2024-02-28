const http = require('http');
const randomNumber = require('./features')
const fs = require('fs')
const path = require('path') 
//console.log(randomNumber())

console.log(path.dirname("/home/index.html"))

const home = fs.readFileSync('./index.html')
console.log(home)

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.end(home)
    }  else if (req.url === '/about'){
        res.end("About Page")
    }  else if (req.url === '/contact'){
        res.end("Contact Page")
    }  else if (req.url === '/random'){
        res.end(`<h1>Your percentage is ${randomNumber()}</h1>`)
    } 
    else{
        res.end("<h1>404 Page not found</h1>")
    }  
});
server.listen(5000, () => {
    console.log("Server is working")
})