const map = new Map();

const string = 'key';
const object = {};
const fn = function() {};

// setting the values
map.set(string, 'string value');
map.set(object, 'object value');
map.set(fn, 'fn value');

map.has(fn); // true

// Map(3) {
//   "key" => "string value",
//   {} => "object value",
//   ƒ => "fn value"
// }
