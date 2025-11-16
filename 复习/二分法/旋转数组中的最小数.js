/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] < nums[right]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return nums[left];
};
findMin([3, 4, 5, 1, 2]);
// 思路：就是代码的如果right《当前值，说明，在翻转的内容里面，最小值在右边
