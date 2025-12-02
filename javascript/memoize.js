function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args); // unique key for the arguments

    if (cache.has(key)) {
      return cache.get(key); // return cached result
    }

    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}


function slowSquare(n) {
  // simulate heavy computation
  for (let i = 0; i < 1e9; i++) {}
  return n * n;
}

const fastSquare = memoize(slowSquare);

console.time("first");
console.log(fastSquare(10));  // computes (slow)
console.timeEnd("first");

console.time("second");
console.log(fastSquare(10));  // returned instantly from cache
console.timeEnd("second");