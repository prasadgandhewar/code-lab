
const result = [];
function flattenArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr !== 'number') flattenArray(arr[i]);    
        else result.push(arr[i]); 
    }
     

    return result;
}

flattenArray([1,[2,[3,[4]]]]);