const https = require('https');
const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');


function postJson(host, endpoint, body, port, username, password){
    return new Promise((resolve, reject) =>{
        let bodyText = JSON.stringify(body);
        // configure the http request
        let requestOptions = {
            method: "POST",
            host: host,
            path: endpoint,
            headers: {"Content-Type": "application/json",
                      "Content-Length": Buffer.byteLength(bodyText)}
        };
        if(port){requestOptions.port = port}
        if(username && password){requestOptions.auth = `${username}:${password}`}
        let request = https.request(requestOptions);
        request.write(body);
        request.end();
        request.on('error', e=>(reject(e)));
        request.on('response', response=>{
            if(response.statusCode!==200){reject(new Error(`Http Status ${response.statusCode}`));
                response.resume();
                return;}
            response.setEncoding('utf8');
            let body = '';
            response.on('data', chunk => {body += chunk});
            response.on('end', ()=>{
                try{
                    resolve(JSON.parse(body));
                }
                catch (e) {
                    reject(e);
                }
            });
        });
    });
}


function serve(rootDir, port){
    let server = new http.Server();
    server.listen(port);
    console.log(`listening on port ${port}`);
    server.on('request', (request, response)=>{
        let endpoint = url.parse(request.url).pathname;
        if(endpoint === 'test/mirror/'){
            response.setHeader("Content-Type", "text/plain; charset=UTF-8");
            response.writeHead(200);
            response.write(`${request.method} ${request.url} HTTP/${request.httpVersion}\r\n\r\n`);
            request.pipe(response);
        }
    })
}