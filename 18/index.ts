
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
function fourSum(nums: number[], target: number): number[][] {
    if (
        !Array.isArray(nums) ||
        nums.length < 4
    ) {
        return []
    }

    const results: number[][] = []
    const len = nums.length
    nums.sort((numOne, numTwo) => numOne - numTwo)

    for (let i = 0; i < len - 3; i++) {
        if (i > 0 && nums[i - 1] === nums[i]) {
            continue
        }

        for (let j = i + 1; j < len - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue
            }

            let left = j + 1
            let right = nums.length - 1

            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right]

                if (sum === target) {
                    results.push([
                        nums[i],
                        nums[j],
                        nums[left],
                        nums[right]
                    ])
                    left++
                    right--

                    while (left < right && nums[left] === nums[left - 1]) {
                        left++
                    }

                    while (left < right && nums[right] === nums[right + 1]) {
                        right--
                    }
                } else if (sum < target) {
                    left++
                } else {
                    right--
                }
            }
        }
    }

    return results
};

