function isPalindrome(value) {
    if (typeof value === 'string') {
        let start = 0;
        let end = value.length - 1;

        while(start < end) {
            if (value[start] !== value[end]) return false;
            start++;
            end--;
        }
        return true;
    }
    if (typeof value === 'number') {
        if (value < 0 || (value > 0 && value % 10 === 0)) return false;

        let reverseNum = 0;
        while (value > reverseNum) {
            reverseNum = reverseNum * 10 + (value % 10);
            value = Math.floor(value / 10);
        }

        return value === reverseNum || value === Math.floor(reverseNum / 10);
    }
    return false;
}