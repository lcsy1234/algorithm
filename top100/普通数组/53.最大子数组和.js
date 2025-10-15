// 53. 最大子数组和
const maxSubArray = function (nums) {
  let maxSum = nums[0]; // 初始化最大子数组和为第一个元素
  let currentSum = 0; // 当前子数组和
  for (let num of nums) {
    // 遍历数组中的每个元素
    if (currentSum < 0) {
      // 如果当前子数组和为负数，则重新开始计算
      currentSum = 0;
    }
    console.log("%c Line:12 🍭 currentSum", "color:#b03734", currentSum);
    currentSum += num; // 将当前元素加入子数组和
    maxSum = Math.max(maxSum, currentSum); // 更新最大子数组和
  }
  return maxSum; // 返回最大子数组和
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); //6


function findKthLargest(nums, k) {
  // 转换为“第k小”问题（从0开始索引）
  const targetIndex = nums.length - k;
  
  function quickSelect(left, right) {
    const pivot = nums[right]; // 选最右元素为基准
    let pivotIndex = left;
    
    // 分区：将小于基准的元素移到左侧
    for (let i = left; i < right; i++) {
      if (nums[i] <= pivot) {
        [nums[i], nums[pivotIndex]] = [nums[pivotIndex], nums[i]];
        pivotIndex++;
      }
    }
    // 基准值放到最终位置
    [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]];
    
    // 递归查找目标
    if (pivotIndex === targetIndex) return nums[pivotIndex];
    if (pivotIndex < targetIndex) return quickSelect(pivotIndex + 1, right);
    return quickSelect(left, pivotIndex - 1);
  }
  
  return quickSelect(0, nums.length - 1);
}
// [3, 6, 8, 10, 1, 2, 4]