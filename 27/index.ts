function removeElement(nums: number[], val: number): number {
    const list = nums.filter(item => item !== val)
    //特殊 修改原数组
    nums.splice(0, nums.length, ...list)
    return list.length

};