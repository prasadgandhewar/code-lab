function countOccurances(str) {
    const result = {}
     let maxCount = 0;
    let maxCountChar = '';

    for (char of str) {
        result[char] = (result[char] || 0) + 1;
         if (result[char] > maxCount) {
            maxCount = result[char];
            maxCountChar = char;
        } 
    }

    console.log(result, maxCountChar)
}

countOccurances('this is that.')