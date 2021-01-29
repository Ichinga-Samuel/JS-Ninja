/** const square = function(x){
    return x**2;
};

let cube = function (x) {
    return x**3;
};

function add(a, b){
    return a + b;
}

const mul = (x, y) =>{
    return x * y;
};

let greet = greetings =>{
    return 'good ' + greetings;
};

let hail = () =>{
    return 'i dey hail';
};

console.log(square(5), cube(5), add(10, 5), mul(9, 10), greet('Morning'), hail());

function multiplier(f){
    let sum = 0;
    return number =>{
        sum += number * f;
        return sum
    }
}

function movingAverage(){
    let total = 0;
    let count = 0;
    return term => {
        total += term;
        count +=1;
        return total / count;
    }
}

function recursiveFactorial(n){
    if (n===1){
        return 1;
    }
    else{
        return recursiveFactorial(n-1) * n;
    }
}

mf = multiplier(10);
console.log(mf(5), mf(20));
ma = movingAverage();
for(let i=1; i<11; i++){
    console.log(ma(i))
}

console.log(recursiveFactorial(5));


function isEven(n) {
    return n % 2 === 0;
}

function recursiveEven(n){
    if (n < 0){
        n = -1 * n
    }
    if (n === 2){
        return true;
    }
    else if (n===1) {
        return false
    }
    else {
        return recursiveEven(n-2)
    }
}

function countChar(string, char){
    let count = 0;
    for(let i=0; i<string.length; i++){
        if(string[i] === char){
            count += 1;
        }
    }
    return count
}
console.log(isEven(-46), recursiveEven(-89), countChar('BoBoboBBb', 'B'), Number.isNaN(Number('k')));

n = 'jkop';
n[0] = 'p';
console.log(n.length, n['length'], n[0]);

function min(...a){
    return a.reduce((x, y)=> x < y ? x : y);
}
let b = [9, -(98), -9, 4, 2, 3, 1];
let c = [23, 4, 6, 8, -18, 7, 9, 2];
// sort integers using compare function
c.sort((a,b)=>a-b);
b.sort((a,b)=>b-a) // reverse sort
console.log(b, c);

// expression function
let f = (function(){}());

// function with default value
function ca(x=0, y=0, z=0){
    this.m = x*y-z; // function can be used to modified the context on which it was called using "this"
    return x*y-z;
}

// giving extra attributes to functions
ca.names = 'po';
console.log(ca);

// using binding to create partial functions
v = ca.bind(null, x=4, y=5);
let o = {x: 5, y:6, z:7};

// invoking function with apply() and call() and calling the string method on a function
console.log(ca.call(o, 4, 6, 8), ca.apply(o,[4,5,6]), v(6), ca.toString());

// Testing memoization using the function as an object to hold results of previous calls
function memoFact(n){
    if(!(n in memoFact)){
        console.log('Computing for the first time');
        if(n === 1){return n}
        else{memoFact[n]  = n*memoFact(n-1)}
    }
    return memoFact[n];
}

function memFact(v){
    if(!memFact.cache){
        memFact.cache = {};
    }
    if(memFact.cache[v] === undefined){
        console.log(`Computing with ${v} for the first time`);
        if(v === 1){return v}
        else{memFact.cache[v]  = v * memFact(v-1)}
    }
    return memFact.cache[v];

}

w = memoFact(5);
v = memoFact(6);
d = memFact(7);
e = memFact(8);
console.log(w, v, e, d);

// Function Constructors
let v = Function('a', 'b', 'return a+b');

// Constructor Functions
function cons(){
    this.a = 5;
    return this;  // refers to the global object
}
let consb = cons();

// console.log(v(5, 6), consb); **/

// closures
// A constructor function
function  close(){
    var count = 0;
    close['total'] = 90;
    this.getCount = function(){
        return count
    };
    this.counter = function () {count++};
}
let o = {x: 5, y:6, z:7};
let c = new close();

ns = (function(){
    let a = 100;
    let b = 200;
});
c.counter();
c.counter();
c.counter();
c.n = 90;

console.log(c.getCount(), c);