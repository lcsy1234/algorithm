/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const result = [];
    const lenS = s.length
    const lenP = p.length
    
    // 边界条件：s长度小于p，不可能有异位词
    if (lenS < lenP) return result;
    
    // 初始化字符频率数组（26个小写字母）
    const countP = new Array(26).fill(0);
    const countWindow = new Array(26).fill(0);
    
    // 计算p的字符频率，以及s中第一个窗口的字符频率
    for (let i = 0; i < lenP; i++) {
        countP[p.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        countWindow[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    
    // 计算初始差异数（diff=0表示频率完全相同）
    let diff = 0;
    for (let i = 0; i < 26; i++) {
        if (countP[i] !== countWindow[i]) {
            diff++;
        }
    }
    if (diff === 0) {
        result.push(0); // 第一个窗口是异位词，起始索引0
    }
    
    // 滑动窗口：从第1位开始移动，直到窗口结束
    for (let i = lenP; i < lenS; i++) {
        // 左侧字符离开窗口（i - lenP是左侧字符的索引）
        const leftChar = s.charCodeAt(i - lenP) - 'a'.charCodeAt(0);
        // 右侧字符进入窗口
        const rightChar = s.charCodeAt(i) - 'a'.charCodeAt(0);
        
        // 移除左侧字符前，若频率相同，差异数+1
        if (countWindow[leftChar] === countP[leftChar]) {
            diff++;
        }
        countWindow[leftChar]--; // 左侧字符频率-1
        // 移除后若频率相同，差异数-1
        if (countWindow[leftChar] === countP[leftChar]) {
            diff--;
        }
        
        // 加入右侧字符前，若频率相同，差异数+1
        if (countWindow[rightChar] === countP[rightChar]) {
            diff++;
        }
        countWindow[rightChar]++; // 右侧字符频率+1
        // 加入后若频率相同，差异数-1
        if (countWindow[rightChar] === countP[rightChar]) {
            diff--;
        }
        
        // 差异数为0，当前窗口是异位词，记录起始索引（i - lenP + 1）
        if (diff === 0) {
            result.push(i - lenP + 1);
        }
    }
    
    return result;
};

