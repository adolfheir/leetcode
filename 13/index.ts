function romanToInt(s: string): number {
    let result: number = 0
    // 替换特殊罗马数
    for (const sp in SpRomanDict) {
        if (hasSpRoman(s, sp)) {
            result += SpRomanDict[sp]
            s = s.replace(sp, '')
        }
    }
    // 累计转换常规罗马数
    if (s.length > 0) {
        for (const roman of s) { result += RomanDict[roman] }
    }
    return result
};

/** 判断特殊罗马数有无 */
const hasSpRoman: Function = (s: string, sp: string): boolean => !!SpRomanDict[sp] && s.indexOf(sp) > -1
/** 常规罗马数字典 */
const RomanDict: Record<string, number> = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 }
/** 特殊罗马数字典 */
const SpRomanDict: Record<string, number> = { CM: 900, CD: 400, XC: 90, XL: 40, IX: 9, IV: 4 }

