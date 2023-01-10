function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let arr = nums1.concat(nums2).sort((a, b) => a - b);
    if (arr.length == 0) return 0;
    let num1: number;
    let num2: number
    if (arr.length % 2 == 0) {
        num1 = arr[arr.length / 2 - 1]
        num2 = arr[arr.length / 2]
    } else {
        let index = Math.floor(arr.length / 2)
        num1 = num2 = arr[index]
    }
    return (num1 + num2) / 2
};


let ret = findMedianSortedArrays([1, 3], [2])
console.log("out", ret)