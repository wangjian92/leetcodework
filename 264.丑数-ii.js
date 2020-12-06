/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  let a = 0,
    b = 0,
    c = 0,
    ug = new Array(n);
  ug[0] = 1;
  for (let i = 1; i < n; i++) {
    let n2 = ug[a] * 2,
      n3 = ug[b] * 3,
      n5 = ug[c] * 5;
    ug[i] = Math.min(Math.min(n2, n3), n5);
    if (ug[i] === n2) a++;
    if (ug[i] === n3) b++;
    if (ug[i] === n5) c++;
  }
  return ug[n - 1];
};
// @lc code=end
