function climbStairs(n) {
    const arr = new Array(n + 1);
    arr[1] = 1; arr[2] = 2;
    for (let i = 3; i <= n; i++) {
        arr[i] = arr[i - 2] + arr[i - 1];
    }
    return arr[n];
}
//因为是方法数总和，所以到第一阶和第二阶都要包括
function climbStairs(n) {
    if(n<=2) return n
   const dp=new Array(n+1)
   dp[1]=1
   dp[2]=2
   for(let i=3;i<=n;i++){
    dp[i]=dp[i-1]+dp[i-2]
   }
   return dp[n]
}
