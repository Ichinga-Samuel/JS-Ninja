function* oddGen(stop){
    let v = 0;
    while(true){
        if(v%2){yield v}
        v++;
    }
}

let odd = oddGen(10);
//for(let i=0;i<25;i++){
    //console.log(odd.next().value);}
let a = [5, 6, 7];
let b = ['a', 'b', 'c', 'd'];

function* zip(...iterables){
    let a = iterables;
    let ai = a.map(i=>i[Symbol.iterator]());
    let s = 0;
    while(ai.length>0){
        let i = ai[s].next();
        if(i.done){ai.splice(s, 1);}
        else{yield i.value}
        s++;
        if(s===ai.length){s = 0}
    }
}

let c = [...zip(a, b)];
function* genFun(s){
    let x = yield s;
    let c = yield x;
    let d = yield c;
    yield d;
}

function* rn(n){
    if(n>0){
        yield* rn(n-1);
        yield n;
    }
}
let g = genFun(10);
//console.log(g.next(90));
//for(let i of [8,3,5])
//console.log(g.next(i));
nmm = rn(10);
bbb = [...rn(12)];
for(i of nmm)(console.log(i));
console.log(bbb)
//export {zip}


