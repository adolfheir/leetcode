//找规律 
var convert = function (s, numRows) {
    if (numRows === 1) return s // 首先还是，只有一行直接返回
    let arr = new Array(numRows).fill('') // 创建一个数组，存储每行
    let n = numRows * 2 - 2 // 1. 
    for (let i = 0; i < s.length; i++) {
      i % n < numRows ? arr[i % n] += s[i] : arr[numRows * 2 - 2 - i % n] += s[i] // 8.
    }
    return arr.join('') // 拼接返回
  };
