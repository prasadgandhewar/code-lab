function removeDuplicate(arr) {

    return [...new Set(arr)];

}

removeDuplicate(['aa','ad', 'aa', 'ff'])