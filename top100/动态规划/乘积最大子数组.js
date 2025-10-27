/**
 * @param {number[]} nums
 * @return {number}
 */
// 思路：因为这个乘积得到的可能是负数或者正数；然后下一位可能是负负得正或者就是正正，
// 所以要跟踪当前的最大值和最小值，并且如果当前值为1000，之前的累ji的值是负数
var maxProduct = function (nums) {
  const n = nums.length;
  if (n === 0) return 0;
  let globalmax = nums[0];
  let curMax = nums[0];
  let curMin = nums[0];
  const dp = [];
  dp[0] = nums[0];
  for (let i = 1; i < n; i++) {
    const tempMax = curMax;
    curMax = Math.max(nums[i], nums[i] * tempMax, nums[i] * curMin);
    curMin = Math.min(nums[i], nums[i] * tempMax, nums[i] * curMin);
    globalmax = Math.max(globalmax, curMax);
  }
  return globalmax;
};
