/**
 * @param {string} s
 * @return {number}
 */
//统计回文子串数量
var countSubstrings = function(s) {
    let count = 0;
    const n = s.length;
    
    // 中心扩展函数：以 l 和 r 为中心，向两边扩展，统计回文子串数量
    const expand = (l, r) => {
        while (l >= 0 && r < n && s[l] === s[r]) {
            count++; // 找到一个回文子串，计数加 1
            l--; // 向左扩展
            r++; // 向右扩展
        }
    };
    
    // 遍历所有可能的中心
    for (let i = 0; i < n; i++) {
        // 奇数长度回文（中心是单个字符 i）
        expand(i, i);
        // 偶数长度回文（中心是 i 和 i+1 之间）
        expand(i, i + 1);
    }
    
    return count;
};