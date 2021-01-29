fs = require('fs');


function filePipeSocket(file, socket){
}

function result(error, text){
    if(error)(console.log(error));
    console.log(text);
}
function readLines(path, sync=true, callback){
    if(sync){
        let result = fs.readFileSync(path, {encoding: null});
        result = result.toString().trim().split('\r\n');
        console.log(result);
    }
    return fs.readFile(path, {encoding:'utf8'}, callback);

}

function copyFile(source, dest, callback){
    let input = fs.createReadStream(source);
    let output = fs.createWriteStream(dest);

    input.on('data', (chunk)=>{
        let size = output.write(chunk);
        if(!size)(input.pause())});

    input.on('end', ()=>{output.end()});
    input.on('error', error=>{callback(error); process.exit();});
    output.on('drain', ()=>{input.resume()});
    output.on('error', error=>{callback(error); process.exit();});
    output.on('finnish', ()=>{console.log('complete')});


}
// copyFile('ex.txt', 'exx/exxx.txt', console.error);
//let b = readLines('ex.txt', sync=false,  result);
// console.log(b);
g = fs.readdirSync('C:\\Users\\Ichinga Samuel\\Downloads');
console.log(g)