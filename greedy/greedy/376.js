function wiggleMaxLength(nums) {
    // 贪心的思路是什么？
    // 找到一个峰值，如如果这个峰值在遍历到下一个值的时候不变成切换成峰就说明不是
    //核心是记录符号变化
    // silu: 初始化符号方向, 如果符号有变化并且前一个符号是不变的或者是

    if (nums.length <= 1) return nums.length;
    let count = 1
    let prevDiff = 0
    for (let i = 1; i < nums.length; i++) {
        let curDiff = nums[i] - nums[i - 1]
        if (curDiff > 0 && prevDiff <= 0 || curDiff < 0 && prevDiff >= 0) {
            count++
            prevDiff = curDiff//记录在相同值出现的时候，如果放在if外面就不会记录当前的的符号
        }
        // prevDiff = curDiff //[1, 2, 2, 3]，将prevdiff更新为0了，就会多一次变化错误
    }
    return count

}
console.log(wiggleMaxLength([1, 2, 2, 3]))