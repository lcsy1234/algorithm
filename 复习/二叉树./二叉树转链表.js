var flatten = function (root) {
  if (!root) return;
  flatten(root.left);
  flatten(root.right);
  // 先展开
  // 然后存储
  const temp = root.right;
  root.right = root.left;
  root.left = null;
  //错误地方在与lastNode
  let lastNode = root;
  while (lastNode.right) {
    lastNode = lastNode.right;
  }
  lastNode.right = temp;
  return root;
};
