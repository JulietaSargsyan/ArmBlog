const http = require('http');
const fs = require('fs');
const _ = require('lodash');


const server = http.createServer((req, res) => {
    const random = _.random(0,50);
    console.log(random);

    res.setHeader('Content-Type', 'text/html');

    let path = './views/';

    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-blah':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    })
});

server.listen(3000, 'localhost', () => {
    console.log('listening to port 3000');
})