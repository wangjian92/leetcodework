/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 *
 * https://leetcode-cn.com/problems/word-ladder/description/
 *
 * algorithms
 * Medium (43.99%)
 * Likes:    512
 * Dislikes: 0
 * Total Accepted:    67.3K
 * Total Submissions: 152.1K
 * Testcase Example:  '"hit"\n"cog"\n["hot","dot","dog","lot","log","cog"]'
 *
 * 给定两个单词（beginWord 和 endWord）和一个字典，找到从 beginWord 到 endWord
 * 的最短转换序列的长度。转换需遵循如下规则：
 *
 *
 * 每次转换只能改变一个字母。
 * 转换过程中的中间单词必须是字典中的单词。
 *
 *
 * 说明:
 *
 *
 * 如果不存在这样的转换序列，返回 0。
 * 所有单词具有相同的长度。
 * 所有单词只由小写字母组成。
 * 字典中不存在重复的单词。
 * 你可以假设 beginWord 和 endWord 是非空的，且二者不相同。
 *
 *
 * 示例 1:
 *
 * 输入:
 * beginWord = "hit",
 * endWord = "cog",
 * wordList = ["hot","dot","dog","lot","log","cog"]
 *
 * 输出: 5
 *
 * 解释: 一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog",
 * ⁠    返回它的长度 5。
 *
 *
 * 示例 2:
 *
 * 输入:
 * beginWord = "hit"
 * endWord = "cog"
 * wordList = ["hot","dot","dog","lot","log"]
 *
 * 输出: 0
 *
 * 解释: endWord "cog" 不在字典中，所以无法进行转换。
 *
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) {
    return 0;
  }
  let beforeQueue = [[beginWord, 1]];
  let endQueue = new Map([[endWord, 1]]);
  const wordListSet = new Set(wordList);
  while (beforeQueue.length && endQueue.size) {
    if (beforeQueue.length > endQueue.size) {
      [beforeQueue, endQueue] = [Array.from(endQueue), new Map(beforeQueue)];
    }
    const currentLevelSize = beforeQueue.length;
    for (let i = 0; i < currentLevelSize; i++) {
      const [word, level] = beforeQueue.shift();
      for (let l = 0; l < word.length; l++) {
        // 遍历单词，把能转换的单词push入队列
        for (let charCode = 97; charCode <= 122; charCode++) {
          const newWord = `${word.slice(0, l)}${String.fromCharCode(
            charCode
          )}${word.slice(l + 1)}`;
          if (endQueue.has(newWord)) {
            return endQueue.get(newWord) + level;
          }
          if (wordListSet.has(newWord)) {
            beforeQueue.push([newWord, level + 1]);
            wordListSet.delete(newWord);
          }
        }
      }
    }
  }
  return 0;
};
// @lc code=end
