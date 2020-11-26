/*
 * @lc app=leetcode.cn id=1030 lang=javascript
 *
 * [1030] 距离顺序排列矩阵单元格
 */

// @lc code=start
/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function (R, C, r0, c0) {
    const res = []
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            res.push([i, j])
        }
    }
    res.sort((a, b) => {
        return getL(a[0], a[1], r0, c0) - getL(b[0], b[1], r0, c0)
    })
    return res
};

let getL = (r1, c1, r2, c2) => {
    return Math.abs(r1 - r2) + Math.abs(c1 - c2)
}
// @lc code=end
