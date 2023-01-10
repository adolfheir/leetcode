function lengthOfLongestSubstring(s: string): number {
    // if (s.length <= 1) return s.length;
    let max: number = 0
    s.split("").reduce((previousValue: string, currentValue: string, currentIndex: number, array: string[]) => {
        let index = previousValue.indexOf(currentValue);
        let isLast = currentIndex === array.length - 1
        let ret: string = `${previousValue}${currentValue}`
        if (index !== -1) {
            max = Math.max(previousValue.length, max);
            ret = ret.slice(index + 1)
        }
        if (isLast) {
            max = Math.max(ret.length, max);
        }
        console.log("previousValue", index, previousValue, currentValue)
        return ret
    }, "")

    return max
};

let data = lengthOfLongestSubstring("dvdf")
console.log("data", data)