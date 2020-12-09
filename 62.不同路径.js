/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    const f = new Array(m).fill(0).map(() => new Array(n).fill(0))
    for (let i = 0; i < m; i++) {
        f[i][0] = 1
    }
    for (let j = 0; j < n; j++) {
        f[0][j] = 1
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            f[i][j] = f[i - 1][j] + f[i][j - 1]
        }
    }
    return f[m - 1][n - 1]

    // let ans = 1;
    // for (let x = n, y = 1; y < m; ++x, ++y) {
    //     ans = Math.floor(ans * x / y);
    // }
    // return ans;
    // let ans = 1;
    // for (let x = n, y = 1; y < m; ++x, ++y) {
    //     ans = Math.floor(ans * x / y);
    // }
    // return ans;
};
// @lc code=end

