/*
 * @lc app=leetcode.cn id=406 lang=javascript
 *
 * [406] 根据身高重建队列
 */

// @lc code=start
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
    // 排序
    people.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0])
    return people.reduce((acc, cur) => (acc.splice(cur[1], 0, cur), acc), [])
};
// @lc code=end

