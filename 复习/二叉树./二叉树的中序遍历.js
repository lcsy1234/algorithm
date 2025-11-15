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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const ares = [];
  const dfs = (node) => {
    if (node === null) return; // 空节点，直接返回
    dfs(node.left)
    ares.push(node.val)
    dfs(node.right)
  };
  dfs(root)
  return ares;
};
