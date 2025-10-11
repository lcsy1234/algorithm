var isSymmetric = function (root) {
  // 空树视为对称
  if (!root) return true;

  // 递归比较左子树和右子树是否镜像对称
  return isMirror(root.left, root.right);
};
function isMirror(left, right) {
  if (!left && !right) return true;
  if (!left || !right) return false;
  if (left.val !== right.val) return false;
  return isMirror(left.left, right.right) && isMirror(left.right, right.left);
}
