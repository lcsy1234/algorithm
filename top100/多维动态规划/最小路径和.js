/**
 * @param {number[][]} grid
 * @return {number}
 */
// 思路：当前的值为当前的值+从上方或者从左边来的值
var minPathSum = function(grid) {
    const m=grid.length
    const n=grid[0].length
    const  dp=new Array(m).fill(0).map(()=>new Array(n))
    dp[0][0]=grid[0][0]
    //填充第一行，所以长度是列的数量,并且只能从左边过来
    for(let i=1;i<n;i++){
        dp[0][i]=grid[0][i]+dp[0][i-1]
    }
     for(let i=1;i<m;i++){
        dp[i][0]=grid[i][0]+dp[i-1][0]
    }
    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            dp[i][j]=grid[i][j]+Math.min(dp[i-1][j],dp[i][j-1])
        }
    }
    return dp[m - 1][n - 1]
};
// 还有种一维数组的方式