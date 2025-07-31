/**
 * @param {number[]} cost
 * @return {number}
 */

var minCostClimbingStairs = function (cost) {
    const n = cost.length
    //定义状态，i值是累积，先将当前的值
    const dp = new Array(n+1)//0,1,2,索引
    dp[0]= dp[1]=0
    for (let i = 2; i <= n; i++) {
        dp[i]=Math.min(dp[i-1]+cost[i-1],dp[i-2]+cost[i-2])
    }
    return dp[n]
};

minCostClimbingStairs([1,100,1 ,1,1,100,1,1,100,1])
//1
//2
//三个值进行比较