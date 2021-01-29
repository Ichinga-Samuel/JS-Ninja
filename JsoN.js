let o = {s: "test", n: 0, m(x, m){this.b=this.s.split(''); this.b.push(m); return x/this.n}};
let no = {s: "test", n: 0};
o.m(9, no);
o.j = no;
console.log(o);
let b = JSON.stringify(o, ['s','n', 'm','b','j'],null, 3);
let c = JSON.parse(b);

function reviver(key, value){
    if(key==='n')return 90;
    if(value==='e')return 56;
    return value;
}
let d = JSON.parse(b,function(key, value){
    if(key==='n')return this.n=90;
    if(value==='e')return 56;
    return value});
console.log(d);


