/**
// array objects are sequence type data structures
let a = [1, 2, 4, 6];
let b = [5, 6, 7];
console.log(a, b);
a.push(10);
b.pop();
b.push(a);
console.log(a, b, typeof a);

let c = {man: false, woman: 5, boys: [2,3,5,7], 45: 'pop', 'five': 5,
    girls: {man: false, woman: 5, boys: [2,3,5,7], 8: 'eight'}};
c.pop = 9;
c[89] = '90';
console.log(c, c.boys, typeof c['woman'], c.girls, c['45'], c.five, c.girls.man, c.girls["8"], Object.keys(c), 'boys' in c);

const d = {one: 1, 2: 'two'};
d.one = 11;
d.three = 3;
a.push(d['one']);
a.push(d.three);

console.log(d, a, 4 in a, a.includes(5));

/* for(i=0;i<a.length;i++){
    console.log(a[i])
}
for(i of a){
    console.log(i)
}
a.unshift('man');
console.log(a);
a.shift();
console.log(a);
a.shift();
let du = a + b;
let v = a.concat(b);
v = v.concat('m');
a.b = 7;
a.push(9);
console.log(a, b, a.slice(0,7), du[1], v, a['b'], a);
let t = [2, 4, 6];
t[4] = 5;
console.log(t, t[3]);
a = 'string';
b = '9';
ps = a.padStart(a.length+6, '0e');
pe = b.padEnd(4, '0');
v = "Secretary birds specialize in stomping";
m = v.split(' ');
c = [];
for(i of m) c.push(i.length);
b = [...m, ...c]
// console.log(ps, pe, m, typeof m, m[0], c, Math.max(...c), b);
let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

for(i of [1, 2, 3]){
    v = list.value;
    console.log()
};
let name = 'sam';
let s = `my name is ${name}`;
// console.log(s);

let sy = Symbol('sys');
let ss = Symbol();
let sd = Symbol();
let sh = Symbol.for('share');
console.log(sy, sy.toString(), sh);
let ar = [1,3,5,8];
for (i in ar){(console.log(ar[i]))};
let cc = {man: false, woman: 5, boys: [2,3,5,7], 45: 'pop', 'five': 5,
    girls: {man: false, woman: 5, boys: [2,3,5,7], 8: 'eight'}};

console.log(b);

for(; list.rest; list=list.rest)console.log(list.value);
for([i, j] of Object.entries(cc)) console.log(`${i} : ${j}`);

o = new Object();
// let b = Object.create(Array.prototype);
// b = [];
b = new Array();
bb = Object.create(b);
for(let i=0; i<10; bb[i]=i++);
// console.log(bb);
o = {a: 1, b:3};
oo = {a: 1, b:3};
ooo = {a: 1, b:3, toString: function () {return `${this.a}, ${this.b}`}};
s = ooo.toString();
c = {a:4, b:5, c:3, h:8};
Object.assign(oo, c);
o = Object.assign({}, c, o);
ooo = {...c,...ooo};
console.log(o, oo, ooo);
b = [4, 8, 9];
w = 5;
console.log(b.toString(), w.toString());

function string(o){
    let s = ``;
    for(let i of Object.keys(o)){
        s += `${o[i]}, `;
    }
    s = s.slice(0, s.length-2);
    return s;
}
console.log(s);
[c, m] = [4, 5];
b = {c, m};
console.log(b);
let ob = {
// An ordinary data property
    dataProp: 45,
// An accessor property defined as a pair of functions.
    get accessorProp() { return this.dataProp; },
    set accessorProp(value) { this.dataProp = value; }
};
console.log(ob.dataProp);
g = {
    x: 5,
    get xx() {return this.x ** 2;},
    set xx(n) {this.x = 6;}
};
g.x = 7;
console.log(g.xx);

a = [3, 4,,,8,9];
console.log(a, a[5], a.length);
x = new Array(10);
x[11] = 'crazy';
for(i=0;i<x.length; x[i]=i++);
s = 'sammy';
b = Array.from(s, i=>{return i.toUpperCase()});
b.forEach(i=>{console.log(i)}); **/
// Array Iterator  Methods.
// forEach()
// multiply the value of every even index by 2
let o = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
let a = [...o];
a.forEach((v, i, a)=>{
    if(!(i%2)){a[i] = v*2}
});

// map()
// produce a cumulative sum array
let b = [...o];
b.map((v, i, a) => {
    if(i===0)a[i] = a[i];
    else {a[i] += a[i-1];}
});

// filter()
// removes odd numbers
let c = [...o];
c = c.filter(v => !(v%2));

// every() and some()
let e = o.every(v => v>0); // checks if every element is greater than 0
let s = o.some(v => !(v%5)); // checks to see if there is a multiple of 5

// reduce() and reduceRight()
let ss = 'samuel';
ss = ss.split('');
ss = ss.reverse();
let r = o.reduce((x, y)=>x+y, 100);
let rr = ss.reduceRight((x,  y)=> x+y,'ichinga ');

// flat and flatMap()
let f = [2, 4, 6, [3, 5, 6, [5, 7]]];
// f = f.flat(10);
fm = f.flatMap((x)=>x>5?[]:2*x);  // [] in the ternary operator means drop from the list
console.log('forEach():', a,'\n','map():', b, '\n','filter():',c, 'every():', e, '  some():', s, '\n','reduce():',r, 'reduceRight()',rr,'\n','flatMap', f, fm);
