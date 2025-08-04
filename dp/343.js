/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    //dp[i]是最大乘机积
    let dp=new Array(n+1).fill(0)
    // 初始化
    dp[2]=1
    for(let i=3;i<=n;i++){
        for(let j=1;j<i;j++){
            let cur=Math.max(j*(i-j),j*dp[i-j])
            dp[i]=Math.max(cur,dp[i])
        }
    }
return dp[n]
    
};