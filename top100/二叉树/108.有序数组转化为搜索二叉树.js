/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    // 递归辅助函数：将nums[left...right]范围的元素构建为BST
    const build = (left, right) => {
        // 边界条件：左边界 > 右边界，无元素可构建，返回null
        if (left > right) return null;
        
        // 选择中间元素作为根节点（左中位数，保证平衡）
        const mid = Math.floor((left + right) / 2);//
        console.log("%c Line:21 🍓 mid", "color:#93c0a4", mid);
        const root = new TreeNode(nums[mid]);
        
        // 递归构建左子树（左半部分数组）
        root.left = build(left, mid - 1);
        // 递归构建右子树（右半部分数组）
        root.right = build(mid + 1, right);
        
        return root;
    };
    
    // 从整个数组范围开始构建（0到nums.length-1）
    return build(0, nums.length - 1);
};
sortedArrayToBST([-10,-3,0,5,9])
// //问题是： 给你一个有序的升序数组然后拍成avl树
// var sortedArrayToBST = function(nums) {
//     function build(left,right){
//         if(left>right) return null
//         const mid=Math.floor((right+left)/2)//0
//         const root=new TreeNode(nums[mid])
//         build(left,mid-1)//0 1  return 
//         build(mid+1,right) // 3 4 return 
//         return root 
//     }
// }
// // [-10,-3,0,5,9]