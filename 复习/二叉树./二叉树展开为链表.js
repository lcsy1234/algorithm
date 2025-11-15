var flatten = function(root) {
    // 递归终止条件：空节点无需处理
    if (!root) return;

    // 1. 递归展开左子树和右子树
    flatten(root.left);
    flatten(root.right);

    // 2. 保存原右子树（后续需要连接）
    const originalRight = root.right;

    // 3. 将左子树作为新的右子树，左指针置空
    root.right = root.left;
    root.left = null;

    // 4. 找到新右子树（原左子树）的最后一个节点
    let lastNode = root;
    while (lastNode.right) {
        lastNode = lastNode.right;
    }

    // 5. 将原右子树连接到新右子树的末尾
    lastNode.right = originalRight;
};
// 构建示例树
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(6);

flatten(root);

// 验证展开结果（前序遍历应为1→2→3→4→5→6）
let result = [];
let cur = root;
while (cur !== null) {
    result.push(cur.val);
    cur = cur.right;
}
console.log(result); // 输出：[1,2,3,4,5,6]（正确）