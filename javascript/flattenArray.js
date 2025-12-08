
const result = [];
function flattenArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) flattenArray(arr[i]);    
        else result.push(arr[i]); 
    }
     

    return result;
}

function flatterArrayShort(arr){
    return arr.flat(Infinity);
}

console.log(flattenArray([1,[2,[3,[4]]]]));