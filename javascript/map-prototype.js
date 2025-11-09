function map(arr, fn, thisArg) {
  if (arr == null) throw new TypeError('arr is null/undefined');
  if (typeof fn !== 'function') throw new TypeError('fn must be a function');

  const O = Object(arr);
  const len = O.length >>> 0;
  const res = new Array(len);

  for (let i = 0; i < len; i++) {
    if (i in O) res[i] = fn.call(thisArg, O[i], i, O); // preserves holes
  }
  return res;
}

console.log(map([1,,3], x => x*2))