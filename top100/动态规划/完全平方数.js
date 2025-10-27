/**
 * @param {number} n
 * @return {number}
 */
// 思路：i可以分成i-j*j+j*j; 然后找到最小的值，dp[i]记录的是一种中间结果比如最小是dp【4】=1，那么dp【8】就等于1+1，因为就j*j以经存储了最小状态
var numSquares = function(n) {
    const dp=new Array(n+1).fill(Infinity)
    dp[0]=0
    for(let i=1;i<=n;i++){
        for(let j=1;j*j<=i;j++){
            dp[i]=Math.min(dp[i],dp[i-j*j]+1)
        }
    }
    return dp[n]
};