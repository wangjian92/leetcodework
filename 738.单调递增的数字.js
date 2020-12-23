/*
 * @lc app=leetcode.cn id=738 lang=javascript
 *
 * [738] 单调递增的数字
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function (N) {
    let arr = N.toString().split('')
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            arr[i] -= 1
            for (let j = i + 1; j < arr.length; j++) {
                arr[j] = 9
            }
            i -= 2
        }
    }
    return arr.join('')
};
// @lc code=end

