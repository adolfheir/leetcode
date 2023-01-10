function longestPalindrome(s: string): string {
    let leftIndex = 0
    let rightIndex = 0
    let maxLen = 0

    let index = 0
    while (index < s.length) {
        let left = index - 1
        while (left >= 0 && s[index] === s[left]) {
            left--;
        }
        let right = index + 1;
        while (right < s.length && s[index] === s[right]) {
            right++;
        }
        let temp = right
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        if (maxLen < right - left - 1) {
            maxLen = right - left - 1;
            leftIndex = left + 1;
            rightIndex = right - 1;
        }
        index = temp
    }

    return s.substring(leftIndex, rightIndex + 1)
};



console.log(longestPalindrome("ccc"))