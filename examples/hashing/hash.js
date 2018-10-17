const hashCode = val => {
  let hashCode = 0;
  let character;
  // If value to be hashed is already an integer, return it.
  if (val.length === 0 || val.length === undefined) {
    return val;
  }
  for (let i = 0; i < val.length; i += 1) {
    character = val.charCodeAt(i);
    hashCode = (hashCode << 5) - hashCode + character;
    hashCode = hashCode & hashCode;
  }
  return hashCode;
};

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
        return hashCode(o);
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
