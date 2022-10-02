const http = require('http');

function datacontrol(req, resp) {
    resp.write("<h1>Hello this is anil sidhu</h1>");
    resp.end();
}


http.createServer(datacontrol).listen(4500);
