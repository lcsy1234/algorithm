/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    // 二分查找：当left < right时继续循环，直到left == right（找到最小值）
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        // 情况1：nums[mid] < nums[right] → 右半部分[mid, right]是升序，最小值在左半部分（含mid）
        if (nums[mid] < nums[right]) {
            right = mid;
        } 
        else {
            left = mid + 1;
        }
    }
    // 循环结束时，left == right，即为最小值的索引
    return nums[left];
};