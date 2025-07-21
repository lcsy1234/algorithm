// 贪心算法
function Jump(nums) {
    let n = nums.length
    let maxReach = 0
    for (let i = 0; i < n; i++) {
        if (i > maxReach) {
           break
        }
        maxReach = Math.max(maxReach, i + nums[i])
        if (maxReach >= n - 1) {
            return true
        }
    }
    return false
}