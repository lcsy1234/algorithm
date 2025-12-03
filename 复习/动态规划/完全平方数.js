/**
 * 计算组成n所需的最少完全平方数个数
 * @param {number} n - 目标正整数
 * @return {number} 最少个数
 */
function numSquares(n) {
    // 初始化dp数组：dp[i]表示组成i的最少平方数个数
    const dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0; // 边界条件：组成0需要0个
    
    // 填充dp数组（从1到n）
    for (let i = 1; i <= n; i++) {
        // 遍历所有可能的平方数j²（j从1到√i）
        for (let j = 1; j * j <= i; j++) {
            const square = j * j; // 当前平方
            // 更新dp[i]：取“组成i-square的最少个数+1”的最小值
            dp[i] = Math.min(dp[i], dp[i - square] + 1);//
        }
    }
    
    return dp[n];
}
numSquares(8)
var numSquares = function(n) {
    const dp=new Array(n+1).fill(Infinity)
    dp[0]=0
    for(let i=1;i<=n;i++){
        for(let j=1;j*j<=i;j++){
            const square=j*j
            dp[i]=Math.min(dp[i],dp[i-square]+1)
        }
    }
    return dp[n]
};