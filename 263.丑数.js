/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
  if (num == 1) return true;
  if (num == 0) return false;
  const arr = [2, 3, 5];
  for (let i = 0; i < arr.length; i++) {
    if (num % arr[i] === 0) {
      return isUgly(num / arr[i]);
    }
  }
  return false;
};
// @lc code=end
