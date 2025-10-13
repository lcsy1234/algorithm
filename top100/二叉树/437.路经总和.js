/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number} 满足条件的路径数量
 */
// 思路：所有的路径和，等于target，几个连续节点拼接，双层递归
var pathSum = function (root, targetSum) {
  // 外层递归：遍历每个节点，将其作为路径起点
  const dfs = (node) => {
    if (!node) return 0; // 空节点无路径
    // 计算以当前节点为起点的路径中，和为targetSum的数量
    const currentCount = countPath(node, targetSum);
    // 递归处理左子树和右子树，累加所有起点的结果
    return currentCount + dfs(node.left) + dfs(node.right);
  };

  // 内层递归：从node出发，向下计算路径和，统计和为remaining的路径数量
  const countPath = (node, remaining) => {
    if (!node) return 0; // 空节点无路径
    let count = 0;
    // 当前节点值等于剩余目标和，说明找到一条有效路径
    if (node.val === remaining) {
      count = 1;
    }
    // 递归计算左子树：剩余目标和减去当前节点值
    const leftCount = countPath(node.left, remaining - node.val);
    // 递归计算右子树：剩余目标和减去当前节点值
    const rightCount = countPath(node.right, remaining - node.val);
    return count + leftCount + rightCount;
  };

  return dfs(root);
};
// 思路：要外层便利所有节点，然后每个内层节点都，往下寻找，找到一个路径
var pathSum = function (root, targetSum) {
  const dfs = (node) => {
    if (!node) return 0;
    //要传这个节点
   const currentCount= FindCount(node,targetSum)
    return  currentCount+dfs(node.left)+dfs(node.right)
  };
  const FindCount = (node,remaining) => {
    if(!node) return 0
    let count=0
    if(node.val===remaining){
        count=1
    }
    const leftCount=FindCount(node.left,remaining-node.val)
    const rightCount=FindCount(node.right,remaining-node.val)
    return count+leftCount+rightCount
  };
  return dfs(root);
};
