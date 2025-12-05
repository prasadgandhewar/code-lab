function add(a) {
  let sum = a;

  function inner(b) {
    sum += b;
    return inner;        // return itself for chaining
  }

  return inner;
}