/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder 前序遍历序列
 * @param {number[]} inorder 中序遍历序列
 * @return {TreeNode} 构建的二叉树根节点
 */
var buildTree = function (preorder, inorder) {
  // 哈希表存储中序遍历的值到索引的映射，加速查找根节点位置
  const inorderMap = new Map();
  inorder.forEach((val, idx) => inorderMap.set(val, idx));

  // 递归辅助函数：根据前序[preStart..preEnd]和中序[inStart..inEnd]构建子树
  const build = (preStart, preEnd, inStart, inEnd) => {
    // 边界条件：子树无节点，返回null
    if (preStart > preEnd || inStart > inEnd) return null;

    // 1. 前序的第一个元素是当前子树的根节点
    const rootVal = preorder[preStart];
    const root = new TreeNode(rootVal);

    // 2. 在中序中找到根节点的索引
    const rootInIdx = inorderMap.get(rootVal);

    // 3. 计算左子树的节点数量（中序中根节点左侧的元素个数）
    const leftSize = rootInIdx - inStart; //1

    // 4. 递归构建左子树：
    // 前序范围：[preStart+1, preStart+leftSize]（根后紧接左子树）
    // 中序范围：[inStart, rootInIdx-1]（根左侧为左子树）
    root.left = build(
      preStart + 1,
      preStart + leftSize,
      inStart,
      rootInIdx - 1
    );

    // 5. 递归构建右子树：
    // 前序范围：[preStart+leftSize+1, preEnd]（左子树后是右子树）
    // 中序范围：[rootInIdx+1, inEnd]（根右侧为右子树）
    root.right = build(preStart + leftSize + 1, preEnd, rootInIdx + 1, inEnd);

    return root;
  };

  // 从完整序列开始构建（前序0~n-1，中序0~n-1）
  return build(0, preorder.length - 1, 0, inorder.length - 1);
};

var buildTree = function (preorder, inorder) {
  const indexMap = new Map();
  for (let i = 0; i < inorder.length; i++) {
    indexMap.set(inorder[i], i);
  }
  const build = (preorderPre, preorderEnd, inorderPre, inorderEnd) => {
    if (preorderPre > preorderEnd || inorderPre > inorderEnd) return null;
    const rootVal = preorder[preorderPre];
    const root = new TreeNode(rootVal);
    const inorderRootIndex = indexMap.get(rootVal);
    const leftSize = inorderRootIndex - inorderPre;
    root.left = build(
      preorderPre + 1,
      preorderPre + leftSize,
      inorderPre,
      inorderRootIndex - 1
    );
    root.right = build(
      preorderPre + leftSize + 1,//preorderPre为什么
      preorderEnd,
      inorderRootIndex + 1,
      inorderEnd
    );
    return root;
  };
  return build(0, preorder.length - 1, 0, inorder.length-1);
};
