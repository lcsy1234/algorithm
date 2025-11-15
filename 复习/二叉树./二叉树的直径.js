//
var diameterOfBinaryTree = function (root) {
  let maxDiametre = 0;
  function depth(node) {
    if (!node) return 0;
    const leftDepth = depth(node.left);
    const rightDepth = diameterOfBinaryTree(node.right);
    maxDiametre = Math.max(maxDiametre, leftDepth + rightDepth);
    return Math.max(leftDepth, rightDepth) + 1;
  }
  depth(root);
  return maxDiametre;
};
