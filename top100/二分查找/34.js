/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // 辅助函数：查找左边界（第一个出现target的索引）
    const findBoder = (nums, target,border) => {
        let left = 0;
        let right = nums.length - 1;
        let res = -1; // 初始化为-1（未找到）
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                res = mid; // 记录当前位置，可能是左边界
                border==='left' ?right = mid - 1:left=mid+1; // 继续向左查找，寻找更早的位置
            } else if (nums[mid] < target) {
                left = mid + 1; // 目标在右侧，左边界右移
            } else {
                right = mid - 1; // 目标在左侧，右边界左移
            }
        }
        return res;
    };
    // 分别查找左边界和右边界
    const leftIdx = findBoder(nums, target,'left');
    const rightIdx = findBoder(nums, target,'right');
    return [leftIdx, rightIdx];
};

// 测试用例
console.log(searchRange([5,7,7,8,8,10], 8)); // 输出 [3,4]
console.log(searchRange([5,7,7,8,8,10], 6)); // 输出 [-1,-1]
// console.log(searchRange([], 0)); // 输出 [-1,-1]
// console.log(searchRange([1], 1)); // 输出 [0,0]
// console.log(searchRange([1,2,3,3,3,3,4,5,9], 3)); // 输出 [2,5]
