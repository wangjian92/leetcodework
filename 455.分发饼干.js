/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)

    const gn = g.length, sn = s.length

    let c = 0

    for (let i = 0, j = 0; i < gn && j < sn; i++, j++) {
        while (j < sn && g[i] > s[j]) {
            j++
        }
        if (j < sn) {
            c++
        }
    }
    return c
};
// @lc code=end

