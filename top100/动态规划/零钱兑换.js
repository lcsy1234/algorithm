/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const len=coins.length
    // 出错点
    if(amount===0)return 0
    //出错点
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