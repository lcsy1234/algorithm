/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    const n = nums.length
    // const maxArr=[]
    const maxNum= regression(-999,nums, n,0)
    return maxNum
};
function regression(max,nums, n,window) {
    let windowSum = 0
    let windowSatrt=window
    let maxNum=max
    if(window>=n) return max
    for (let left = 0; left < n - window; left++) {
        while (windowSatrt >= 0) {
            windowSum += nums[left+windowSatrt]
            windowSatrt--
        }
        if (windowSum > maxNum) {
            maxNum = windowSum
            windowSum=0
        }
        windowSatrt=window
    }
    
    return regression(maxNum,nums,n,windowSatrt+1)
}
// maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
//贪心算法
    /**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 0) return 0;//这一步我忘记了
    let curSum=nums[0]
    let max=nums[0]
    for(let i=1;i<nums.length;i++){
        curSum=Math.max(nums[i],curSum+nums[i])
        max=Math.max(max,curSum)
    }

    return max
};
maxSubArray([-2,1,-3,4,-1,2,1,-5,4])

