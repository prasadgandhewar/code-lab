function sumAllEven(arr) {
    const flatarr = arr.flat(Infinity); // flatArray2(arr);
    console.log(flatarr);

    return flatarr.reduce((preVal, currVal) => {
        return currVal % 2 === 0 ? preVal + currVal : preVal;
    }, 0)
}

function flatArray(arr, finalarr = []) {
    for (let value of arr) {
        if (Array.isArray(value)) {
            flatArray(value, finalarr)
        } else {
            finalarr.push(value);
        }
    }
    return finalarr;

}

function flatArray2(arr) {
    return arr.reduce((acc, curr, index) => {
        return acc.concat(Array.isArray(curr) ? flatArray2(curr) : curr);
    }, [])
}
console.log(sumAllEven([1, 2, [3, 4, [5, 6, [7, 8]]]]))