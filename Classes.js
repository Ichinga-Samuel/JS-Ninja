// Creating classes the old style before ES6
function Range(from, to){
    this.from = from;
    this.to = to;
    Range['sum'] = function sum(start, end)
    {
        if (!end) {
            [start, end] = [0, start]
        }
        let sum = (end - start + 1) / 2 * (start + end);
        return sum;
    }
}

Range.prototype = {
    constructor: Range,
    includes: function(x){return (this.from <= x) && (x <= this.to)},
    [Symbol.iterator](){
        let next = Math.ceil(this.from);
        let last = this.to;
        return{
            next(){
                return(next<=last)?{value: next++}:{done: true};
            }
        };

}
};


// Creating class with the class keyword
class NewRange{
    constructor(from, to){
        this.from = from;
        this.to = to;
    }

    includes(x){return (this.from <= x) && (x <= this.to)}

    equals(that){
        return (that.from === this.from) && (that.to === this.to) && (that instanceof NewRange);
    }
    *[Symbol.iterator]() {
        for (let start = this.from; start <= this.to; start++) {
            yield start;
        }
    }
    static sum(start, end){
        if(!end){[start, end] = [0, start]}
        let sum = (end - start + 1)/2 * (start + end);
        return sum;
    }
}

class Span extends NewRange{
    constructor(from, span){
        let to = from + span - 1;
        super(from, to);
    }
}

r = new Range(20, 34);
nr = new NewRange(3, 8);
rn = new NewRange(3, 8);
sp = new Span(3, 5);
console.log(r.includes(26), nr.includes(2), NewRange.sum(10), Range.sum(10), rn.equals(nr), Span.sum(90), sp.includes(7));
let m = {'e':4, 't':5, 'er':6,'f':7,[Symbol.iterator](){
    let iters = Object.values(this);
    let start = 0;
    return{
        next(){
            return(start<iters.length)?{value:iters[start++]}:{done:true};
        },
        return(){
            console.log('Terminating...');
            return{done:true}
        }
    };
    }};

let go = {'e':4, 't':5, 'er':63, *[Symbol.iterator](){
        let iters = Object.values(this);
        yield* iters;
        //for(let i of iters){yield i}
    }};
for(i of m){
    if(i===6)break;
    console.log(i);}
for(i of go)console.log(i);
//mm = m[Symbol.iterator]();
//console.log(mm.next());