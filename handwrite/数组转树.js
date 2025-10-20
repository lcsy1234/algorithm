// 思路：
/**
 * 将扁平数组转换为树形结构
 * @param {Array} arr - 扁平数组，每个元素需包含 id 和 parentId
 * @param {*} rootParentId - 根节点的 parentId 标识（默认 0）
 * @returns {Array} 树形结构数组（根节点集合）
 */
function arrayToTree(arr, rootParentId = 0) {
  // 边界处理：空数组直接返回
  if (!Array.isArray(arr) || arr.length === 0) return [];

  // 1. 建立映射表：id -> 节点（同时初始化 children）
  const nodeMap = {};
  for (const item of arr) {
    // 复制原节点，避免修改原数据；初始化 children 为空数组
    nodeMap[item.id] = { ...item, children: [] };
  }

  // 2. 遍历数组，关联父子节点
  const tree = [];
  for (const item of arr) {
    const currentNode = nodeMap[item.id]; // 当前节点（从映射表取，已含 children）
    const parentId = item.parentId;       // 当前节点的父 ID

    if (parentId === rootParentId) {
      // 3. 父 ID 是根标识，直接作为根节点加入结果
      tree.push(currentNode);
    } else {
      // 找到父节点，将当前节点加入父节点的 children
      const parentNode = nodeMap[parentId];
      if (parentNode) { // 防止父节点不存在的异常情况
        parentNode.children.push(currentNode);
      } else {
        // 父节点不存在时，默认作为根节点（可选逻辑，根据业务调整）
        tree.push(currentNode);
      }
    }
  }

  return tree;
}
