function add(a) {
  let sum = a;

  function inner(b) {
    sum += b;
    return inner;        // return itself for chaining
  }

  inner.valueOf = () => sum;   // when JS tries to convert to number
  inner.toString = () => sum;

  return inner;
}