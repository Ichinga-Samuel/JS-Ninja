let {performance} = require('perf_hooks');
n = new Date();
t = new Date(2020, 6, 12);
t.setFullYear(2021);
//n.setTime(20);
// console.log(t.getFullYear(), t.getDate(), n.getTime(), n, t.getTime(), performance.now());
console.log(n.toString(), n.toUTCString(), n.toDateString(), n.toLocaleDateString(), n.toISOString(), n.toTimeString(), n.toLocaleTimeString());
