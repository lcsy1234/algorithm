//思路是dp【i]是最大值的乘积，此时积分可能是负负得正，所以要记录两个状态
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
    const tempMin=curMin
    curMax = Math.max(nums[i], nums[i] * tempMax, nums[i] * tempMin);
    curMin = Math.min(nums[i], nums[i] * tempMax, nums[i] * tempMin);
    globalmax = Math.max(globalmax, curMax);
  }
  return globalmax;
};

