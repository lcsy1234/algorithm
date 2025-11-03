/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    // 哈希表：记录t中字符的需求次数
    const need = new Map();
    // 哈希表：记录当前窗口中字符的出现次数
    const window = new Map();
    
    // 初始化need：统计t中每个字符的频率
    for (const c of t) {
        need.set(c, (need.get(c) || 0) + 1);
    }
    
    let left = 0, right = 0; // 左右指针
    let valid = 0; // 满足需求的字符种类数
    let start = 0; // 最小子串的起始索引
    let minLen = Infinity; // 最小子串的长度（初始为无穷大）
    
    while (right < s.length) {
        // 1. 扩展窗口：右指针右移，加入字符c
        const c = s[right];
        right++;
        
        // 若c是需要的字符，更新window
        if (need.has(c)) {
            window.set(c, (window.get(c) || 0) + 1);
            // 若window中c的数量等于need中的数量，valid+1
            if (window.get(c) === need.get(c)) {
                valid++;
            }
        }
        
        // 2. 当窗口满足所有需求（valid等于need的大小），尝试收缩左指针
        while (valid === need.size) {
            // 更新最小子串
            const currentLen = right - left;
            if (currentLen < minLen) {
                start = left;
                minLen = currentLen;
            }
            
            // 收缩窗口：左指针右移，移除字符d
            const d = s[left];
            left++;
            
            // 若d是需要的字符，更新window
            if (need.has(d)) {
                // 若移除前window中d的数量等于need中的数量，移除后会不满足，valid-1
                if (window.get(d) === need.get(d)) {
                    valid--;
                }
                window.set(d, window.get(d) - 1);
            }
        }
    }
    
    // 若minLen仍为无穷大，说明无结果；否则返回子串
    return minLen === Infinity ? "" : s.substring(start, start + minLen);
};
console.log(minWindow("ADOBECODEBANC",'ABC'))
