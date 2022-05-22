
// Build-in modules
// os = operating system
//  path
// FS =file system
// HTTP

const http = require('http');
const server = http.createServer((req, res) => {//request,response

    if (req.url === '/') {
        res.end('Welcome to our home page'); //http://localhost:5000
    }

    if (req.url === '/about') {
        res.end('here is our short history');//http://localhost:5000/about
    }

    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `) //http://localhost:5000/error
})
server.listen(5000);

// const http = require('http');
// const server = http.createServer((req, res) => {//request,response
//     console.log(req);
//     res.write('Welcome to our home page')
//     res.end()
// })
// server.listen(5000);//http://localhost:5000/ (type this in your browser then they give result)

