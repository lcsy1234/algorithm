/**
 * 合并时间区间
 * @param {number[][]} intervals 时间区间数组，每个元素为 [start, end]
 * @returns {number[][]} 合并后的时间区间数组
 */
function mergeIntervals(intervals) {
    // 处理边界情况：空数组或只有一个区间
    if (intervals.length <= 1) {
        return intervals.slice(); // 返回副本，避免修改原数组
    }

    // 1. 按区间的起始时间（start）升序排序
    // 确保区间按时间顺序排列，为后续合并做准备
    const sortedIntervals = [...intervals].sort((a, b) => a[0] - b[0]);

    // 2. 初始化结果数组，放入第一个区间
    const merged = [sortedIntervals[0]];

    // 3. 遍历剩余区间，依次合并
    for (let i = 1; i < sortedIntervals.length; i++) {
        const current = sortedIntervals[i];
        const lastMerged = merged[merged.length - 1]; // 获取结果中最后一个已合并的区间

        // 判断当前区间与最后一个已合并区间是否重叠或相邻
        if (current[0] <= lastMerged[1]) {
            // 有重叠/相邻，合并它们：
            // 新的起始时间是两者中较小的（已排序，所以是lastMerged[0]）
            // 新的结束时间是两者中较大的
            merged[merged.length - 1] = [
                lastMerged[0],
                Math.max(lastMerged[1], current[1])
            ];
        } else {
            // 无重叠，直接加入结果数组
            merged.push(current);
        }
    }

    return merged;
}

// 测试案例
console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]));
// 输出：[[1,6],[8,10],[15,18]]（[1,3]和[2,6]合并）

// console.log(mergeIntervals([[1,4],[4,5]]));
// // 输出：[[1,5]]（相邻区间合并）

// console.log(mergeIntervals([[1,2],[3,5],[6,7],[8,10],[12,16],[4,8]]));
// // 输出：[[1,2],[3,10],[12,16]]（[3,5]、[4,8]、[6,7]、[8,10]合并为[3,10]）

// console.log(mergeIntervals([])); // 输出：[]
// console.log(mergeIntervals([[5,5]])); // 输出：[[5,5]]
