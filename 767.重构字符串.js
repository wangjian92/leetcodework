/*
 * @lc app=leetcode.cn id=767 lang=javascript
 *
 * [767] 重构字符串
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
const getIndx = (c) => c.charCodeAt() - "a".charCodeAt();
const getAlpha = (c) => String.fromCharCode(c);
var reorganizeString = function (S) {
  if (S.length < 2) {
    return S;
  }
  const counts = new Array(26).fill(0);
  let maxCount = 0;
  const length = S.length;
  for (let i = 0; i < length; i++) {
    const c = S.charAt(i);
    counts[getIndx(c)]++;
    maxCount = Math.max(maxCount, counts[getIndx(c)]);
  }
  if (maxCount > Math.floor((length + 1) / 2)) {
    return "";
  }
  const reorganizeArray = new Array(length);
  let evenIndex = 0,
    oddIndex = 1;
  const halfLength = Math.floor(length / 2);
  for (let i = 0; i < 26; i++) {
    const c = getAlpha("a".charCodeAt() + i);
    while (counts[i] > 0 && counts[i] <= halfLength && oddIndex < length) {
      reorganizeArray[oddIndex] = c;
      counts[i]--;
      oddIndex += 2;
    }
    while (counts[i] > 0) {
      reorganizeArray[evenIndex] = c;
      counts[i]--;
      evenIndex += 2;
    }
  }
  return reorganizeArray.join("");
};
// @lc code=end
