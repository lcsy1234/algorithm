var maxSubArray = function (nums) {
    if(nums.length===0) return 0
    //主要是因为有正负数
    let curSum = nums[0]
    let maxSum = nums[0]
    for (let i = 1; i < nums.length; i++) {
        //    当前子序和？累加后如果都比他大就直接选它
        curSum = Math.max(nums[i], nums[i] + curSum)
        //    再来一个最大子序和，因为curSum后续可能会变小要保持最大值
        maxSum = Math.max(curSum, maxSum)
    }
    return maxSum
}