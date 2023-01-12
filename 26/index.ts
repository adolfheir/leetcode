function removeDuplicates(nums: number[]): number {
    let newList = [...new Set(nums)]
    //特殊 修改原数组
    nums.splice(0, nums.length, ...new Set(nums))
    return newList.length
};

let ret = removeDuplicates([1, 1, 2])
