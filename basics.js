
console.log('Escaping a newline \\n with \\');
console.log(typeof '3.9');
console.log('5' - 1);
console.log(true == 1);
console.log(false !== 0);
console.log( Infinity || 9);
m = 5;
console.log(m * 6);
v = m - 6;
const c = 8;
let o = 8;
console.log(v, m, typeof m, o);

let n = 100;
if (n > 100) {
    console.log(n, 'is a large number')
}
else if (n < 100){
    console.log(n, 'is a small number')
}
else{
    console.log(n, 'is one hundred')
}

let g = 0;
while (g <= 12){
    console.log(g)
    g += 2;
}

let r = 100;
do{
    r /= 5
}
while (r > 5);
console.log(r);

for(let s = 32; s >= 0; s-=2){
    if (s % 11 == 0){
        console.log(s, 'stop here')
        break;
    }
    else if (s % 3 == 0){
        continue
    }
    console.log(s)
}
let vf = 9;
switch(vf % 2){
    case 0:
        console.log('Even');
        break;
    case 1 :
        console.log('odd');
        break;
    default:
        console.log('negative number')
}

for (let i='#'; i.length<=7; i+='#'){
    console.log(i)
}


for (let i=1; i<21; i++){
    if (i % 3 === 0 === i % 5){
        console.log('FizzBuzz')
    }
    else if (i % 3 === 0){
        console.log('Fizz')
    }
    else if(i % 5 === 0){
        console.log('Buzz')
    }
    else {
        console.log(i)
    }
}
let s = 8;
for(let i= 1, j=s; i<=s, j>=1; i++, j--){
    console.log(i, j)
}
