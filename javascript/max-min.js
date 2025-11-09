function findMaxMin(arr) {
    if (arr.length === 0) return null;

    var max = arr[0];
    var min = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } else {
            max = arr[i];
        }
    }
     return { min, max }
}

function findMaxMinShort(arr){
    // return [arr.sort()[0], arr.sort()[arr.length-1]];
    return [Math.max(...arr), Math.min(...arr)];
}