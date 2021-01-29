const fs = require("fs");
const util = require('util');
// import * as fs from 'fs'
/* let options = {};

fs.readFile('Coursera.txt', 'utf-8', (err, text)=>{
    if(err){console.warn('Could not read file', err)}
    else{
        Object.assign(options, text);
        return options;
    }
    //startProgram(options);
});

function mul(d) {
    return 7*d;
}

//sum(2, 3).then(mul);
let args = [[2, 4], [4, 5], [6, 8]];
let promises = args.map(i => sum(...i));
let fulfilled = Promise.all(promises).then(mul);
console.log(promises, fulfilled);
function wait(duration) {
    return new Promise((resolve, reject) =>{
        if (duration < 0){reject(new Error("Can't go back in time"))}
        resolve(duration);
        //setTimeout(resolve, duration)
    })
}
// let p1 = new Promise((resolve, reject) => resolve());
// let p2 = new Promise((resolve, reject) => reject());
//let b = wait(9).then(e =>e*7).then(e => e/3).catch(e => console.log(e)).finally(()=>setTimeout(console.log, 0, b));
let p = Promise.resolve([5, 6]);
function sum(a, b) {
    return a+b;
}
let c = {};
//p.then(a=>sum(...a)).then(e=>[e*7, 9]).then(e=>console.log(e));
p.then(i =>{c.m=i;}).finally(()=>setTimeout(console.log, 0, p));
//console.log('Non-Re-entrant');
//setTimeout(console.log, 0, c);
let pa = Promise.all([p.then(j=>j.push(8)), p.then(j=>j.push(9)), p.then(j=>j.push(10))]).finally(()=>setTimeout(console.log, 0, p));
pa.then(values=>console.log(values)); */
const pfs = {readFile: util.promisify(fs.readFile)};
function read(o){
    return fs.readFile('Coursera.txt', 'utf-8', (err, text)=>{if(err){console.warn(err)}
    else{
        Object.assign(o, text);
        return text
    }});
}

function readpsf(){
    return pfs.readFile('Coursera.txt', 'utf-8').then(text=>text)
}
async function mul(a, b){
    let v = a*b;
    return b
}

let ob = {};
let b = read(ob);
let r = readpsf();
console.log(r.then(e=>console.log(e)));