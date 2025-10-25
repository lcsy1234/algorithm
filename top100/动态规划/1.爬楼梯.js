//动态规划
function climbStairs(n) {
    if(n<=2) return n
    //定义状态，dp里面是累积次数
   const dp=new Array(n+1)
   dp[1]=1
   dp[2]=2
   for(let i=3;i<=n;i++){
    dp[i]=dp[i-1]+dp[i-2]
   }
   return dp[n]
}
//递归
