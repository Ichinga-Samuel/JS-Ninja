const {Observable, from, of, interval, Subject}  = require("rxjs");
const {first, map, multicast, refCount} = require("rxjs/operators");

// Observables and Observers
// const ob = new Observable(sub => {
//     sub.next(1);
//     sub.next(2);
//     sub.next(3);
//     sub.complete()
// });
//
// ob.subscribe({
//     next(x) {
//         console.log(x);
//     },
//     error(err) {
//         console.log('an error occurred', err);
//     },
//     complete() {console.log('completed');
//     }
// });
//
// const observable = new Observable(function subscribe(subscriber) {
//     subscriber.next(1);
//     subscriber.next(2);
//     subscriber.next(3);
//     subscriber.complete();
// });
// observable.subscribe(x => console.log(x));
//
// const obs = from([1, 3, 5, 7]);
// let sub = obs.subscribe(x => console.log(x*x));
// sub.unsubscribe();

// let a = of(1, 2, 3);
// let b = map(x => x**x)(a);
// b.subscribe(x => console.log(x));
// let c = first()(a);
// c.subscribe(x => console.log(x));
// let d = interval(10000);
// let e = a.pipe(map(x => x*2), first())
// e.subscribe(x => console.log(x));
// let f = d.subscribe(x => console.log(x));
// f.unsubscribe()

let sub = new Subject();
let g = of(1, 2, 3);
let h = of(3,2, 1);
sub.subscribe(x => console.log('observer 1: ', x));
sub.subscribe(x => console.log('observer 2: ', x));
g.subscribe(sub);


let multicasted = g.pipe(multicast(sub));
// multicasted.subscribe(x => console.log('observer A: ', x));
// multicasted.subscribe(x => console.log('observer B: ', x));
// multicasted.connect();
