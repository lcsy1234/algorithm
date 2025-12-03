var coinChange = function(coins, amount) {
    const len=coins.length
    if(amount===0)return 0
    const dp=new Array(amount+1).fill(Infinity)
    dp[0]=0// 初始条件：金额0需要0个硬币
    for(let i=1;i<=amount;i++){
           for(let j=0;j<len;j++){
            const coin=coins[j]
            if(coin<=i){
                dp[i]=Math.min(dp[i],dp[i-coin]+1)
            }
         }
    }
    // 若dp[amount]仍为初始值（amount + 1），说明无法凑成，返回-1；否则返回dp[amount]
    return dp[amount] > amount ? -1 : dp[amount];
};
//思路就是动态规划，组合思想，就是当前的状态，i-coin是之前已经拼接过的，数组是挨个进行对比状态
//以后遇到这种题的思路就是：组合=dp[i]=dp[i]+dp[i-成分]+1,
//边界判断主要是零
