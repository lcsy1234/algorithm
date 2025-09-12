/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    const n = s.length;
    // 创建 n×n 的 DP 表格，dp[i][j] 表示 s[i..j] 的最长回文子序列长度
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
    
    // 边界条件：单个字符的最长回文子序列长度为 1
    for (let i = 0; i < n; i++) {
        dp[i][i] = 1;
    }
    
    // 从长度为 2 的子串开始遍历（因为长度为 1 的已初始化）
    // len 表示子串长度，从 2 到 n
    for (let len = 2; len <= n; len++) {
        // i 是子串的起始索引，j 是子串的结束索引（j = i + len - 1）
        for (let i = 0; i + len - 1 < n; i++) {
            const j = i + len - 1;
            
            if (s[i] === s[j]) {
                // 若首尾字符相等，长度 = 内部子串长度 + 2
                // 当子串长度为 2 时，内部子串为空（i+1 > j-1），此时长度为 2
                dp[i][j] = len === 2 ? 2 : dp[i + 1][j - 1] + 2;
            } else {
                // 若首尾字符不等，取去掉左或右字符后的最大值
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
            }
        }
    }
    
    // 整个字符串的最长回文子序列长度
    return dp[0][n - 1];
};
