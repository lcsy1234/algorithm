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
 * @return {number[][]}
 */
// 要记录一下每层，然后
var levelOrder = function (root) {
  if (!root) return []; // 空树返回空数组
  const queue = [];
  const res = [];
  queue.push(root);
  while (queue.length > 0) {
    const levelSise = queue.length;
    const curNode = [];
    for (let i = 0; i < levelSise; i++) {
      const node = queue.shift();
      curNode.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    res.push(curNode)
  }
  return res
};
