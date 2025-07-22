function eraseOverlapIntervals(intervals) {
    if (intervals.length === 0) return 0; // 空区间直接返回0
    intervals.sort((a, b) => a[1] - b[1])
    let  firstEndVal = intervals[0][1]
    let count = 0
    for (let i = 1; i < intervals.length; i++) {
        const [frontVal, endVal] = intervals[i]
        //如果上一个值的结束值在front里面说明在区间内
        if ( frontVal<firstEndVal) {
            count++
        } else {
            firstEndVal=endVal
        }
    }
    return count;
}

