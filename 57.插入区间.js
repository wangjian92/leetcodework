/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 *
 * https://leetcode-cn.com/problems/insert-interval/description/
 *
 * algorithms
 * Hard (38.02%)
 * Likes:    238
 * Dislikes: 0
 * Total Accepted:    35.3K
 * Total Submissions: 91.2K
 * Testcase Example:  '[[1,3],[6,9]]\n[2,5]'
 *
 * 给出一个无重叠的 ，按照区间起始端点排序的区间列表。
 *
 * 在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。
 *
 *
 *
 * 示例 1：
 *
 * 输入：intervals = [[1,3],[6,9]], newInterval = [2,5]
 * 输出：[[1,5],[6,9]]
 *
 *
 * 示例 2：
 *
 * 输入：intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * 输出：[[1,2],[3,10],[12,16]]
 * 解释：这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。
 *
 *
 *
 *
 * 注意：输入类型已在 2019 年 4 月 15 日更改。请重置为默认代码定义以获取新的方法签名。
 *
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let i = 0;
  let res = [];
  const len = intervals.length;

  while (i < len && intervals[i][1] < newInterval[0]) {
    res.push(intervals[i]);
    i++;
  }

  while (i < len && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  res.push(newInterval);

  while (i < len) {
    res.push(intervals[i]);
    i++;
  }
  return res;
};
// @lc code=end
