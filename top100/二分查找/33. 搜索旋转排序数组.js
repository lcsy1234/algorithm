/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 思路：第一个判断是否满足有序条件
// 首先判断是在左边还是在右边，然后再判断target是在有序部分还是无序部分
//然后在进行普通的二分排序
//33. 搜索旋转排序数组
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;        
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid; // 找到目标值，返回索引
        }
        // 判断哪一侧是有序的
        if (nums[left] <= nums[mid]) { // 左侧有序
            //target在左侧有序部分，在左侧继续查找
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1; // 目标在左侧有序部分
            } else {
                left = mid + 1; // 目标在右侧部分
            }
        } else { // 右侧有序
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1; // 目标在右侧有序部分
            } else {
                right = mid - 1; // 目标在左侧部分
            }
        }
    }
    return -1;
};