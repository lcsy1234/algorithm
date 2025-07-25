function partitionLabels(s) {
    // 记录每个字符最后出现的索引位置
    const lastPos = {};
    for (let i = 0; i < s.length; i++) {
        lastPos[s[i]] = i;
    }

    const result = [];
    let start = 0; // 当前区间的起始位置
    let end = 0;   // 当前区间的结束位置

    for (let i = 0; i < s.length; i++) {
        // 更新当前区间的最远边界，就是所出现的字符的最大边界
        end = Math.max(end, lastPos[s[i]]);

        if (i === end) {
            result.push(end - start + 1);
            start = end + 1; // 开启新的区间
        }
    }

    return result;
}

// 测试示例
const s = "ababcc";
console.log(partitionLabels(s)); // 输出: [9, 7, 8]
