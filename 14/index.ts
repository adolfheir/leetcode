function longestCommonPrefix(strs: string[]): string {
    let s = ''
    for (let j = 0; j < strs[0].length; j++) {
        for (let i = 1; i < strs.length; i++)
            if (strs[i][j] !== strs[0][j]) return s
        s += strs[0][j]
    }
    return s
};