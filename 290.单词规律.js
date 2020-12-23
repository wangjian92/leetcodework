/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let smap = s.split(' ')
    if (pattern.length !== smap.length) {
        return false
    }
    for (let i = 0; i < pattern.length; i++) {
        if (pattern.indexOf(pattern[i]) != smap.indexOf(smap[i])) {
            return false
        }
    } return true
};
// @lc code=end

