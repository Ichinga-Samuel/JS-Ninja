EventEmitter = require('events');
const net = require('net');
function fib(n){
    fib.cache = {1: 1, 2: 1};
    function fibs(n){
        if(n in fib.cache){return fib.cache[n]}
        else{
            fib.cache[n] = fibs(n-1) + fibs(n-2);
            return fib.cache[n]
        }
    }
    return fibs(n)
}

let server = new net.Server();
server.on('connection', socket => {socket.end('Hello')});
