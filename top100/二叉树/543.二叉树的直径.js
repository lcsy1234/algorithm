/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0;
  function calculatorDepth(node) {
    if (!node) return 0;
    const leftDepth = calculatorDepth(node.left);
    const rightDepth = calculatorDepth(node.right);
    maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);
    return Math.max(leftDepth, rightDepth) + 1;
  }
  calculatorDepth(root);
  return maxDiameter;
};
