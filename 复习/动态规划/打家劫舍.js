var rob = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  const len = nums.length;
  //初始化dp数组，偷不偷第一家
  const dp = new Array(len);
  dp[0] = nums[0];
  //为什么是n不是n+1s
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < len; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return dp[len - 1];
};
var rob = function (nums) {
  //dp是什么，
  const len = nums.length;
  if (len === 0) return 0;
  if (len === 1) return nums[0];
  const dp = new Array(len); //
  dp[1] = nums[0];
  dp[2] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < len; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return dp[len - 1];
};
