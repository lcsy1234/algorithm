//动态规划
function climbStairs(n) {
    if(n<=2) return n
    //定义状态，dp里面是累积次数
   const dp=new Array(n+1).fill(0)
   dp[1]=1
   dp[2]=2
   for(let i=3;i<=n;i++){
    dp[i]=dp[i-1]+dp[i-2]
   }
   console.log("%c Line:12 🍐 dp[n]", "color:#b03734", dp[n]);
   return dp[n]
}
climbStairs(4)
//递归
// 思路：



