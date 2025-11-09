function removeDuplicate(arr) {

    return [...new Set(arr)];

}

function removeDuplicateShort(arr){
    return arr.filter((ele, index) => arr.indexOf(ele) === index);
}

removeDuplicate(['aa','ad', 'aa', 'ff'])