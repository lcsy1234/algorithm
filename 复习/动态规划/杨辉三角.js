/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    // 边界处理：0 行返回空数组
    if (numRows === 0) return [];
    
    // dp 数组存储杨辉三角的所有行，初始化为空数组
    const dp = [];
    
    // 第 0 行（初始条件）
    dp[0] = [1];
    
    // 从第 1 行开始，逐行计算（i 是行索引，从 1 到 numRows-1）
    for (let i = 1; i < numRows; i++) {
        // 当前行的长度为 i+1，先初始化一个空数组
        dp[i] = new Array(i + 1);//定义
        
        // 填充当前行的首尾元素（均为 1）
        dp[i][0] = 1;
        dp[i][i] = 1;
        
        // 填充当前行的中间元素（j 从 1 到 i-1）
        for (let j = 1; j < i; j++) {
            // 中间元素 = 上一行的 j-1 元素 + 上一行的 j 元素
            dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
        }
    }
    
    return dp;
};



    
