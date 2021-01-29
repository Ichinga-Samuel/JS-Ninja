/**
// Number Formatting
let naira = {style:"currency", currency:"NGN", currencyDisplay:"name", useGrouping:true, minimumIntegerDigits:3};
let amount = 23;
let value = Intl.NumberFormat('en', naira);
console.log(value.format(amount));


// Date Time Formatting
let now = new Date();
let tformat = {year:"numeric", day:"2-digit", weekday:"long", era:"long", timeZone:"UTC", timeZoneName:"long"};
let time = Intl.DateTimeFormat('en-US', tformat);
console.log(time.format(now));

// Collator
let comp = {usage:"sort", sensitivity:"variant", ignorePunctuation:true, numeric:true, caseFirst:"upper"};
let compare = new Intl.Collator('en', comp);
let mm = ['e', 'A', 'E', 'r', 'a'];
mm.sort(compare.compare);
console.log(compare.compare('aA', 'ZAa'), mm);

let v = {a:'m', c:'b', d:'t'};
let e = {a:'cm', c:'bg', d:'tr'};
let d = {a:'cxm', c:'bgv', d:'ter'};
console.clear();
console.table([v,e,d], Object.keys(v));
// console.trace(v);
console.count('Sam');
console.log('Sam');
console.log('Sam');
console.count('Sam');
console.countReset('Sam');
console.group('Beninging', 'In');
console.group('starting');
console.log('still?');
console.time('Sams');
console.groupEnd('Beninging');
console.groupEnd();
console.timeLog('Sams');
console.timeEnd('Sams');
 **/

let site = new URL('https://www.google.com:8888/Ichinga/name?=term#fragment');
console.log(site.href, site.origin, site.protocol, site.host, site.hostname, site.port, site.pathname, site.search, site.hash, site.searchParams,);