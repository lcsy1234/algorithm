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


