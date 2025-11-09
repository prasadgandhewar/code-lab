function sumAllEven(arr) {
    const flatarr = flatArray2(arr);
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


console.log(sumAllEven([1, 2, [3, 4, [5, 6, [7, 8]]]]))