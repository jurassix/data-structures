const dedup = list => {
  const __cache = new Map();

  const uniqueList = [];
  list.forEach(item => {
    if (!__cache.has(item)) {
      // update cache
      __cache.set(item, true);

      // add to list
      uniqueList.push(item);
    }
  });
  return uniqueList;
};
