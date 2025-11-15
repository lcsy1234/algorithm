var isValidBST = function (root) {
  //传下一个节点，lower，upper
  const isValid = (node, lower, upper) => {
    if (!node) return true;
    if (node.val >= upper || node.val <= lower) return false;
    return (
      isValid(node.left, lower, node.val) &&
      isValid(node.right, node.val, upper)
    );
  };
  return isValid(root, -Infinity, Infinity);
};
