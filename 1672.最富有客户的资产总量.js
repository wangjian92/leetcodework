/*
 * @lc app=leetcode.cn id=1672 lang=javascript
 *
 * [1672] 最富有客户的资产总量
 */

// @lc code=start
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let ans = 0;
    for (let i = 0; i < accounts.length; i++) {
        let temp = accounts[i].reduce((a, c) => { return a + c }, 0)
        if (temp > ans) {
            ans = temp
        }
    }
    return ans
};
// @lc code=end

