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
// 思路：就是计算每个节点的左右子树深度之和，取最大值
var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0;
  function calculatorDepth(node) {
    if (!node) return 0;
    const leftDepth = calculatorDepth(node.left);//计算左子树深度 0
    const rightDepth = calculatorDepth(node.right);//
    maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);
    return Math.max(leftDepth, rightDepth) + 1;
  }
  calculatorDepth(root);
  return maxDiameter;
};
//测试用例
console.log(diameterOfBinaryTree([1, 2, 3, 4, 5]));
//debug的实际测试输入值

/**
 * 思路：递归计算每个节点的深度，同时更新最大直径
 * 对于每个节点，计算其左子树和右子树的深度，直径为左深度加右深度
 * 使用一个全局变量maxDiameter来记录最大直径
 */