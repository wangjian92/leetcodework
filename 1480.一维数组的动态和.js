/*
 * @lc app=leetcode.cn id=1480 lang=javascript
 *
 * [1480] 一维数组的动态和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let temp = nums.reduce((a, c, i) => {
        a.push(a[i] + c)
        return a
    }, [0])
    return temp.slice(1)
};
// @lc code=end

