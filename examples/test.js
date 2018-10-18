const set = new WeakSet();
let go = true;

const work = () => {
  for (let i = 0; i < 100000; i++) {
    set.add({});
  }
  console.log(0);

  for (let i = 0; i < 100000; i++) {}
  console.log(1);

  if (go) setTimeout(work, 0);
};

// kick it off!
work();

let list = [];
let go = true;
let counter = 0;

const work = () => {
  console.log(++counter);
  list = Array(10000).fill(1, 0);
  // if (go) setTimeout(work, 0);
  work();
};

// kick it off!
work();

let list = [];
let go = true;
let counter = 0;

const work = () => {
  console.log(++counter);
  list = Array(10000).fill(1, 0);
  if (go) setTimeout(work, 0);
};

// kick it off!
work();

let list = Array(10000);
let go = true;
let counter = 0;

const work = () => {
  console.log(++counter);
  list.fill(1, 0);
  if (go) setTimeout(work, 0);
};

// kick it off!
work();

let list = 1;
let go = true;

const work = () => {
  console.log(list);
  list = 1;
  if (go) setTimeout(work, 0);
};

// kick it off!
work();

//github.com/v8/v8/blob/master/src/js/array.js

function hash(val) {
  var i;
  var hashCode = 0;
  var character;
  // If value to be hashed is already an integer, return it.
  if (val.length === 0 || val.length === undefined) {
    return val;
  }
  for (i = 0; i < val.length; i += 1) {
    character = val.charCodeAt(i);
    /*jshint -W016 */
    hashCode = (hashCode << 5) - hashCode + character;
    hashCode = hashCode & hashCode;
    /*jshint -W016 */
  }
  return hashCode;
}

// web apis
// avoid maximum call stack size exceeded
// setInterval vs setTimeout

// recursion
let counter = 0;
let go = true;

const work = () => {
  console.log(counter++);
  if (go) setTimeout(work, 0);
};

// kick it off!
work();

// interval
let counter = 0;

const work = () => {
  console.log(counter++);
};

// kit it off!
const _intervalId = setInterval(work, 0);

// provide a kill switch
const stop = () => clearInterval(_intervalId);

// recursion
let counter = 0;
let total = 0;
let go = true;

const work = callback => {
  total++;
  counter++;
  if (go) {
    if (counter > 500) {
      console.log(total, counter);
      counter = 0; // reset counter
      return setTimeout(() => work(callback), 0); // reset call stack
    } else {
      return work(callback);
    }
  } else {
    callback(total);
  }
};

// kick it off!
work(t => console.log(`total: ${t}`));

// TCO

function factorial(n) {
  function fact(n, res) {
    if (n < 2) return res;

    return fact(n - 1, n * res);
  }

  return fact(n, 1);
}

factorial(5); // 120

function sum(n) {
  function add(total, counter) {
    // console.log(total, counter);
    if (counter >= n) return total;
    return add(total + counter++, counter);
  }
  return add(n, 1);
}

function hash(val) {
  var i;
  var hashCode = 0;
  var character;
  // If value to be hashed is already an integer, return it.
  if (val.length === 0 || val.length === undefined) {
    return val;
  }
  for (i = 0; i < val.length; i += 1) {
    character = val.charCodeAt(i);
    hashCode = (hashCode << 5) - hashCode + character;
    hashCode = hashCode & hashCode;
  }
  return hashCode;
}

const getType = t => {
  if (Array.isArray(t)) return 'array';
  return typeof t;
};

const isCircular = s => {
  const cache = new WeakSet();
  const __isCircular = o => {
    switch (getType(o)) {
      case 'string':
      case 'number':
        return false;
      case 'object':
        if (cache.has(o)) return true;
        else cache.add(o);
        return Object.keys(o)
          .sort()
          .some(key => __isCircular(o[key]));
      case 'array':
        return o.some(__isCircular);
      default:
        return false;
    }
  };
  return __isCircular(s);
};

let a = {};
let b = { '🌧': a };

a['🌈'] = b;

isCircular(a); // true
isCircular(b); // true

const getType = t => {
  if (Array.isArray(t)) return 'array';
  return typeof t;
};

const stringify = s => {
  const cache = new WeakSet();
  const __stringify = o => {
    switch (getType(o)) {
      case 'string':
      case 'number':
        return o; // wrap in hash to hash
      case 'object':
        if (cache.has(o)) return '[Circular Reference]';
        else cache.add(o);
        return (
          '{' +
          Object.keys(o)
            .sort()
            .map(key => key + ':' + __stringify(o[key]))
            .join(',') +
          '}'
        );
      case 'array':
        return '[' + o.map(__stringify).join(',') + ']';
      default:
        return '';
    }
  };
  return __stringify(s);
};

let a = {
  '🐒': '💩',
  yolo: ['🤞🏽', '✌🏽', '🤟🏽', '🤘🏽', { '👌🏽': 'ok' }],
};

stringify(a);
// "{yolo:[🤞🏽,✌🏽,🤟🏽,🤘🏽,{👌🏽:ok}],🐒:💩}"

const hashObj = o => {
  let hashCode = 0;
  Object.keys(o)
    .sort()
    .forEach(key => {
      hashCode += hash(key);
      hashCode += hash(o[value]);
    });
};

function hashCode(val) {
  var i;
  var hashCode = 0;
  var character;
  // If value to be hashed is already an integer, return it.
  if (val.length === 0 || val.length === undefined) {
    return val;
  }
  for (i = 0; i < val.length; i += 1) {
    character = val.charCodeAt(i);
    hashCode = (hashCode << 5) - hashCode + character;
    hashCode = hashCode & hashCode;
  }
  return hashCode;
}

const getType = t => {
  if (Array.isArray(t)) return 'array';
  return typeof t;
};

const sumAcc = (acc, i) => {
  acc += i;
  return acc;
};

const hash = s => {
  const cache = new WeakSet();
  const __hash = o => {
    switch (getType(o)) {
      case 'string':
      case 'number':
        return hashCode(o); // wrap in hash to hash
      case 'object':
        if (cache.has(o)) return 0;
        else cache.add(o);
        return Object.keys(o)
          .sort()
          .map(key => __hash(o[key]))
          .reduce(sumAcc, 0);
      case 'array':
        return o.map(__hash).reduce(sumAcc, 0);
      default:
        return 0;
    }
  };
  return __hash(s);
};

const root = {
  id: 1,
  value: { '🕷': '🕸' },
  children: [
    {
      id: 2,
      value: { '🐴': '🦄' },
      children: [],
    },
    {
      id: 3,
      value: { '🐣': '🐥' },
      children: [
        {
          id: 4,
          value: { '🐼': '🐻' },
          children: [],
        },
      ],
    },
  ],
};

const sleep = async ms => await new Promise(resolve => setTimeout(resolve, ms));

//eloquentjavascript.net/11_async.html

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(item => {
  setTimeout(() => {
    console.log(`${item}😈`);
  }, 0);
});

// store only unique values
class Set {
  constructor() {
    this.list = [];
  }
  get size() {
    return this.list.length;
  }
  add(item) {
    if (!this.has()) {
      this.list.push(item);
    }
  }
  has() {
    return this.list.includes(item);
  }
  delete(item) {
    const index = this.list.indexOf(item);
    if (index !== -1) {
      delete this.list[index];
    }
  }
}

class Map {
  constructor() {
    this.list = [];
  }
  set(key, value) {
    if (!this.has(key)) {
      this.list.push([key, value]);
    }
  }
  get(key) {
    const item = this.list.find(([k, v]) => k === key);
    if (item) {
      return item.value;
    }
  }
  has(key) {
    return this.list.some(([k, v]) => k === key);
  }
  delete(key) {
    const index = this.list.findIndex(([k, v]) => k === key);
    if (index !== -1) {
      delete this.list[index];
    }
  }
}

<section>
  <h1>🐼</h1>
  <section>
    <h2>🐻</h2>
    <p>🐨</p>
  </section>
  <section>
    <h2>🐯</h2>
    <p>🦁</p>
    <em>
      <h1>🐮</h1>
      <p>🐷</p>
    </em>
  </section>
</section>;
