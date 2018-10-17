// primitives

const set = new Set();

set.add('🦕'); // Set [ '🦕' ]
set.add('🦖'); // Set [ '🦕', '🦖' ]
set.add('🦖'); // Set [ '🦕', '🦖' ]

set.has('🦕'); // true
set.has('🔥'); // false

set.size; // 2

set.delete('🦖'); // removes 🦖 from the set

// iterable
for (let item of set) console.log(item); // '🦕'

// Objects

set = new Set();

// objects use referential equality (===)

set.add({ a: 1 }); // Set [ {a: 1} ]
set.add({ a: 1 }); // Set [ {a: 1}, {a: 1} ]

const b = { b: 2 };
set.add(b); // Set [ {a: 1}, {a: 1}, {b: 2} ]
set.add(b); // Set [ {a: 1}, {a: 1}, {b: 2} ]
