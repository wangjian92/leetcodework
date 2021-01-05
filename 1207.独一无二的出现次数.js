/*
 * @lc app=leetcode.cn id=1207 lang=javascript
 *
 * [1207] 独一无二的出现次数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    const occur = new Map()
    for (const item of arr) {
        if (occur.has(item)) {
            occur.set(item, occur.get(item) + 1)
        } else {
            occur.set(item, 1)
        }
    }
    const times = new Set()
    for (const [key, value] of occur) {
        times.add(value)
    }
    return times.size === occur.size
};
// @lc code=end

