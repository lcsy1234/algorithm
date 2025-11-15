var isSymmetric = function (root) {
  if (!root) return true;
  function isMirror(left, right) {
    if (!left && !right) return true;
    if (!left || !right) return false;
    if (left.val !== right.val) return false;
    return isMirror(left.right, right.left) && isMirror(left.left, right.right);
  }
  return isMirror(root.left, root.right);
};
