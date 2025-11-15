var pathSum = function (root, targetSum) {
  // 思路：就是记录一下当前的整个链表的和，也就是当前的几诶单减速和的节点就是这个路径上的数量
  const prefixSumMap = new Map();
  prefixSumMap.set(0, 1);
  //存储preSum，preSum-target在map中有的话就+1
  function dfs(node, currentSum) {
    if (!node) return 0;
    currentSum += node.val;
    const required = currentSum - targetSum;
    let count = prefixSumMap.get(required) || 0; //路径和
    prefixSumMap.set(currentSum, (prefixSumMap.get(currentSum) || 0) + 1);
    // 4. 递归左、右子树，累加结果
    count += dfs(node.left, currentSum);
    count += dfs(node.right, currentSum);
    prefixSumMap.set(currentSum, prefixSumMap.get(currentSum) - 1);
    return count;
  }
  return dfs(root, 0);
};
