/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    const resArr = [intervals[0]]
    for (let i = 1; i < intervals.length; i++) {
        //记录当前处理的数组的
        let last=resArr[resArr.length-1]
        if(intervals[i][0]<=last[1]){
             last[1]=Math.max(last[1],intervals[i][1])
        }else{
            resArr.push(intervals[i])
        }
    }
    return resArr
};
console.log(merge([[1, 4], [4,5]]));
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // 处理空数组
    if (intervals.length === 0) return [];
    
    // 贪心算法的前提：按区间起始位置排序
    // 排序后才能保证每次处理的区间是按顺序递增的
    intervals.sort((a, b) => a[0] - b[0]);
    
    // 初始化结果数组，放入第一个区间作为初始合并对象
    const result = [intervals[0]];
    
    // 从第二个区间开始遍历
    for (let i = 1; i < intervals.length; i++) {
        // 取出结果中最后一个已合并的区间（贪心选择的当前最优解）
        const last = result[result.length - 1];
        const current = intervals[i];
        
        // 贪心策略：如果当前区间与最后合并区间重叠，就扩展边界
        // （取最大结束值，尽可能覆盖更多重叠区间）
        if (current[0] <= last[1]) {
            last[1] = Math.max(last[1], current[1]);
        } else {
            // 不重叠则直接加入结果，作为新的合并起点
            result.push(current);
        }
    }
    
    return result;
};
console.log(merge([[1,3],[2,6],[8,10],[15,18]])); // [[1,6],[8,10],[15,18]]


