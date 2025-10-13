//问题：
//思路保证左边节点一直小于根节点，右边节点一直大于

var isValidBST = function (root) {
  const validBST = (node, lower, upper) => {
    if(!node) return true
    if (node.val <= lower || node.val >= upper) return false;
    return validBST(node.left, lower, node.val)&&validBST(node.right,node.val,upper);
  };
  
  return validBST(root,-Infinity,Infinity)
};
