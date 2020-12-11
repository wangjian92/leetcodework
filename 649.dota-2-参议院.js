/*
 * @lc app=leetcode.cn id=649 lang=javascript
 *
 * [649] Dota2 参议院
 */

// @lc code=start
/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
    let winQueue = senate.split('');
    let stack = []
    while (winQueue[0]) {
        let data = winQueue.shift();
        if (stack.length == 0 || stack[stack.length - 1] == data) {
            stack.push(data)
        } else {
            winQueue.push(stack.pop())
        }
    }
    return stack.pop() == 'R' ? 'Radiant' : 'Dire'
};
// @lc code=end

