import {zip as z} from 'Gens.js'
let a = [1,2,4,5];
let b = [34, 6,8,0];
let c = [...z(a,b)];
console.log(c);