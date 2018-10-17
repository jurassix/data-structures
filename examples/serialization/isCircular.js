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
