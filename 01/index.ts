function twoSum(nums: number[], target: number): number[] {
    let lens: number = nums.length
    let ret: number[] = []

    let map: Map<number, any> = new Map();
    for (let i = 0; i < lens; i++) {
        const num = nums[i];

        const diff = target - num;
        if (map.has(diff)) {
            // 若差值存在，则直接返回
            // map.get取出的会是符合条件的第一位数值索引，循环走到第二位符合条件时，索引为i
            ret = [map.get(diff), i]
            break;
        }5
        map.set(num, i)
    }
    
    return ret

};