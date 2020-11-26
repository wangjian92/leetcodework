/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
    if (!root) {
        return 0
    }
    let left = countNodes(root.left)
    let right = countNodes(root.right)
    return left + right + 1
};
// countNodes([1, 2, 3, 4, 5, 6])
// @lc code=end

