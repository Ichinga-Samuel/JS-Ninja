// Sets
let s = new Set([2, 4, 6, 8, '3']);
let m = new Set(['3', s]);
let v = new Set();
// console.log(m, s, m.size);
let a = [2, 3, 4, 5, 7];
s.add(7);
s.delete('3');
s.add(a); // adds the whole array as a single element
v.add(...a);  // adds only the first item in the array
v.clear();
s.delete(a);
let p = 1;
s.forEach((n=>p*=n));
s.forEach(((n)=>n*2));
// console.log(s, s.has(4),p);

//maps
let e = new Map(); // an empty map
let b = new Map([[2, 'two'], [3, 'three']]);  // accepts key value pairs in array of arrays
let o = { x: 1, y: 2};
let om = new Map(Object.entries(o)); // anything that evaluates to key/value pairs can be passed to a map including another map object
let nm = new Map(b); // passed a map
nm.set(1, 'one');
nm.delete(2);
om.clear(); // removes everything
k = nm.keys(); // can be used to iterate over keys
kv = nm.values(); // can be used to iterate over values
ke = nm.entries(); // key/value pairs
console.log(b, e, om, nm, om.size, nm.get(1), nm.has(0), k, kv, ke);
nm.forEach((value, key)=>{nm.set(key, key+value);});
x = 5;
nm.set('5', x);
x = 8;
for(let [i, j] of nm){console.log(i,':',j)}
for(let i of nm){console.log(i)}
an = [...nm];
console.log(an, [...s]);