function intersection1(arr1, arr2) {

    var result = [];
    for (let i = 0; i < arr1.length; i++) {
        const found = arr2.indexOf(arr1[i]) > -1;
        if (found) {
            result.push(arr1[i]);
        }
    }
    return result;
}

function intersection2(arr1, arr2) {
  const set = new Set(arr1);
  console.log(set);
  const result = [];

  for (const value of arr2) {
    if (set.has(value) && !result.includes(value)) {
      result.push(value);
    }
  }
  return result;
}

function intersection3(arr1, arr2) {
    return arr1.filter((el) => arr2.includes(el))
}

console.log(intersection3([7, 5, 6, 2, 9, 1], [1, 2, 3, 4]))