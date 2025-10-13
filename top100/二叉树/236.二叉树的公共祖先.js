var lowestCommonAncestor = function (root, p, q) {
  // 终止条件：
  // 1. 当前节点为null（没找到）
  // 2. 当前节点是p或q（找到目标节点，返回它）
  if (root === null || root === p || root === q) {
    return root;
  }

  // 递归查找左子树中是否有p或q
  const left = lowestCommonAncestor(root.left, p, q);
  // 递归查找右子树中是否有p或q
  const right = lowestCommonAncestor(root.right, p, q);

  // 情况1：左子树没找到，右子树找到了 → 结果在右子树
  if (left === null) {
    return right;
  }

  // 情况2：右子树没找到，左子树找到了 → 结果在左子树
  if (right === null) {
    return left;
  }

  // 情况3：左右子树都找到了 → 当前节点是LCA（p和q分别在左右子树）
  return root;
};
//思路是找不到的话就切换路线，然后
var lowestCommonAncestor = function (root, p, q) {
  if (!root) return null;
  // 当前的node是目标节点，或者节点就返回该节点
  if (root === null || root === p || root === q) {
    return root;
  }
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left === null) {
    return right;
  }
  if (right === null) {
    return left;
  }
  return root;
};
