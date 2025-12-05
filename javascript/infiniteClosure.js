function add(a) {
  let sum = a;

  function inner(b) {
    if (b === undefined) {
      return sum;
    }
    sum += b;
    return inner;        // return itself for chaining
  }

  return inner;
}

console.log(add(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)()); // Outputs: 55