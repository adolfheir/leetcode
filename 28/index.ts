function strStr(haystack: string, needle: string): number {
    const length0 = haystack.length
    const lenght1 = needle.length
    if (lenght1 === 0) {
        return 0
    }
    for (let i = 0; i < length0; i++) {
        const str = haystack.slice(i, i + lenght1)
        if (str === needle) {
            return i
        }
    }
    return -1
};
