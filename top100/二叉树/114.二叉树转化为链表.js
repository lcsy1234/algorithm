
// 答案
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

var flatten = function(root) {
    if(!root) return
    flatten(root.left)
   flatten(root.right)
    const originRightNodes=root.right
    root.right=root.left
    root.left=null

    //  4. 找到新右子树（原左子树）的最后一个节点
    let lastNode = root;
    while (lastNode.right) {
        lastNode = lastNode.right;
    }

    // 5. 将原右子树连接到新右子树的末尾
    lastNode.right = originRightNodes;
};
