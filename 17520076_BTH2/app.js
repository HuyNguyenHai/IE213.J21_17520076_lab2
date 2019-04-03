const http = require('http');

const fs = require('fs');

const module1 = require('./mymodules/libs');

function onRequest(req,res) {
    fs.readFile('./home.html', (err, data) => {
        if (err) {
            res.writeHead(404);
            res.write('File not Found');
        }
        else {
            res.writeHead(200, {
                'Content-type': 'text/html'
            });
            res.write(data);
        };
        res.end();
    });
}

const server = http.createServer(onRequest).listen(module1.port, module1.hostname, () => {
    module1.show();
})