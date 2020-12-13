/*
 * @lc app=leetcode.cn id=861 lang=javascript
 *
 * [861] 翻转矩阵后的得分
 */

// @lc code=start
/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function (A) {
  const m = A.length;
  const n = A[0].length;
  //第一列产生的分数
  let res = m * Math.pow(2, n - 1);
  //遍历列
  for (let i = 1; i < n; i++) {
    //统计第i列中0的个数（也可以取1的个数，最后进行运算的是Math.max(num,m-num)）
    let num = 0;
    for (let j = 0; j < m; j++) if (A[j][i] ^ A[j][0]) num++; //不同为0
    res += Math.pow(2, n - i - 1) * Math.max(num, m - num);
  }
  return res;
};
// @lc code=end
