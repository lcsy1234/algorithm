
// 思路：转移方程：dp[i]:是偷盗当前位置的偷盗的最大金额，有两种状态，可以选择偷也可以选择不偷：公式为
// 不偷就是i-1的房子的累积的偷的最大金额dp[i-1]；偷的话就是dp[i-1]+nums[i]
// dp[i]=dp[i-1]+dp[i-2]+nums[i]
var rob = function(nums) {
    if(nums.length===0) return 0
    if(nums.length===1) return nums[0]
    const len=nums.length
    //初始化dp数组，偷不偷第一家
     const dp = new Array(len);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for(let i=2;i<len;i++){
        dp[i]=Math.max(dp[i-1],dp[i-2]+nums[i])
    }
    return dp[len-1]
}
//空件复杂度为o（1）

// 思路：转移方程：dp[i]:是偷盗当前位置的偷盗的最大金额，有两种状态，可以选择偷也可以选择不偷：公式为
// 不偷就是i-1的房子的累积的偷的最大金额dp[i-1]；偷的话就是dp[i-1]+nums[i]
// dp[i]=dp[i-1]+dp[i-2]+nums[i]
var rob = function(nums) {
    if(nums.length===0) return 0
    if(nums.length===1) return nums[0]
    const len=nums.length
    //初始化dp数组，偷不偷第一家
     const dp = new Array(n);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for(let i=2;i<len;i++){
        dp[i]=Math.max(dp[i-1],dp[i-2]+nums[i])
    }
    return dp[i-1]
}
//空件复杂度为o（1）
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length;
    if (n === 0) return 0;
    if (n === 1) return nums[0];
    
    // 初始化：prev2 = dp[0]，prev1 = dp[1]
    let prev2 = nums[0];
    let prev1 = Math.max(nums[0], nums[1]);
    
    // 从第2个房子开始递推（i从2到n-1）
    for (let i = 2; i < n; i++) {
        // 当前最大金额 = max(prev1, prev2 + nums[i])
        const curr = Math.max(prev1, prev2 + nums[i]);
        // 更新prev2和prev1：prev2变prev1，prev1变curr（为下一轮准备）
        prev2 = prev1;
        prev1 = curr;
    }
    
    // prev1 对应 dp[n-1]
    return prev1;
};