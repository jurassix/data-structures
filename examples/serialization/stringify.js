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
        return o;
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
