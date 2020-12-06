/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows == 0) return [];
  let ans = new Array(numRows);
  ans[0] = [1];
  for (let i = 1; i < numRows; i++) {
    ans[i] = [];
    ans[i - 1].reduce((acc, cur) => {
      ans[i].push(acc + cur);
      return cur;
    }, 0);
    ans[i].push(1);
  }
  return ans;
};
// console.log(generate(5));
// @lc code=end
