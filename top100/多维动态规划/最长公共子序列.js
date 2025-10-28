/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// 思路：纵轴代表text1，横轴代表text2；然后需要每次都对比当前字符串的，所以要预留i-1的位置，所以要从1开始
// 我们定义 dp[i][j] 表示：字符串 text1 的前 i 个字符（即 text1[0..i-1]）
// 与 text2 的前 j 个字符（即 text2[0..j-1]）的最长公共子序列长度
var longestCommonSubsequence = function(text1, text2) {
    const m = text1.length; // text1的长度
    const n = text2.length; // text2的长度
    
    // 初始化(m+1)x(n+1)的dp数组，多开一行一列处理边界（i=0或j=0）
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
    
    // 填充dp数组：i从1到m（text1的前i个字符），j从1到n（text2的前j个字符）
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                // 字符匹配：当前长度 = 前i-1和j-1的长度 + 1
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                // 字符不匹配：取“忽略text1当前字符”或“忽略text2当前字符”的最大值
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    
    // 最终结果：两个字符串完整长度的最长公共子序列长度
    return dp[m][n];
};
//"abcde"
longestCommonSubsequence("abcde","ace")
