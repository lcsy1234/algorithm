function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var inorderTraversal = function (root) {
  const result = []; // 存储遍历结果

  // 递归辅助函数：按中序遍历规则访问节点
  const dfs = (node) => {
    if (!node) return; // 边界条件：节点为空时直接返回
    dfs(node.left); // 1. 先遍历左子树
    result.push(node.val); // 2. 访问根节点（记录值）
    dfs(node.right); // 3. 最后遍历右子树// 2
  };

  dfs(root); // 从根节点开始遍历
  return result;
};
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.left.left.left = new TreeNode(6);
root.left.left.right = new TreeNode(7);
inorderTraversal(root);
console.log(
  "%c Line:30 🍰 inorderTraversal(root)",
  "color:#b03734",
  inorderTraversal(root)
);

