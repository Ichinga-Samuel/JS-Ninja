date = /(\d\d)(-)(\d\d)\2(\d{2,4})/uig;

rd = '11-07-2020'.replace(date, '$4\\$3\\$1');
word = RegExp("\w+", 'igsu');
w = /\b\w+\b/ig;
words = /\b\p{Alphabetic}+\b/igu;
st = `The matchAll() 'method' is defined in ES2020, and as of early 2020 is 'implemented' by
modern web browsers and Node. matchAll() expects a RegExp with the g flag set.
Instead of returning an array of 'matching' substrings like match() does, 'however', it
returns an iterator that 'yields' the 'kind' of 'match' 'objects' 'that' match() returns when
used with a non-global RegExp. This makes matchAll() the easiest and most general
way to loop through all matches within a string.`;
mm = /\b\w*[aeiou]{2}\w*\b/ig;
m = RegExp("\\b\\w*[aeiou]{2}\\w*\\b", "igm");
ma = m.exec(st);
matches = [];
am = st.match(mm);
//console.log(ma);
//for(i of am)console.log(i);
//console.log(rd, word.source, word.flags);
vow = /\b\w*[aeiou]+\w*[aeiou]\w*[aeiou]+\w*\b/gim;
q = /'\b(\w*)\b'/igm;
v = st.replace(q, '"$1"');
console.log(v);
//v3 = st.matchAll(vow);
//for(i of v3)console.log(i[0]);
