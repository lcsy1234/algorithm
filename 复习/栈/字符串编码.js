/**
 * @param {string} s
 * @return {string}
 */
var encodeString = function(s) {
    let result = '';
    const n = s.length;
    let i = 0; // 当前遍历起始位置

    while (i < n) {
        let maxK = 1; // 最大重复次数（默认1次，即不重复）
        let bestT = s[i]; // 最优重复子串（默认单个字符）

        // 寻找以i为起点的最长重复子串：尝试不同长度的子串t
        for (let len = 1; len <= Math.floor((n - i) / 2); len++) {
            const t = s.slice(i, i + len); // 候选子串（长度为len）
            let k = 1; // 当前子串t的重复次数

            // 计算t能连续重复多少次  末尾位值，如果截取的内容重复，对走一步
            while (i + k * len < n && s.slice(i + k * len, i + (k + 1) * len) === t) {
                k++;
            }

            // 更新最大重复次数和最优子串（优先选长度长、重复次数高的）
            if (k > maxK || (k === maxK && len > bestT.length)) {
                maxK = k;
                bestT = t;
            }
        }

        // 根据重复次数编码
        if (maxK >= 2) {
            result += `${maxK}[${bestT}]`;
            i += maxK * bestT.length; // 跳过已编码的部分
        } else {
            result += bestT; // 无重复，直接加入
            i += 1; // 移动1位
        }
    }

    return result;
};
encodeString("ababab")
// 三步走
// 首先要让那个i来定位编码的起点
//然后在里面定义maxK与maxStr结果是，maxK+[maxStr]
//让len从小到大，最大是字符串的1/2
//判断一下maxK
//找到最大的maxK或者重复次数相同，但是子串最长
