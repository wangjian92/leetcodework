/*
 * @lc app=leetcode.cn id=621 lang=javascript
 *
 * [621] 任务调度器
 */

// @lc code=start
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  if (n == 0) return tasks.length;
  let map = new Map();
  tasks.forEach((e) => {
    let c = (map.get(e) || 0) + 1;
    map.set(e, c);
  });
  let sorted = Array.from(map.values()).sort((a, b) => b - a);
  let countMax = sorted.lastIndexOf(sorted[0]);
  return Math.max((sorted[0] - 1) * (n + 1) + countMax + 1, tasks.length);
};

// @lc code=end
