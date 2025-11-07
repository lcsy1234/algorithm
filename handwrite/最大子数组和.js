var maxSubArray = function(nums) {
    let currentMax = nums[0]; // 以当前元素结尾的最大子数组和
    let maxSum = nums[0];     // 全局最大子数组和

    for (let i = 1; i < nums.length; i++) {
        // 更新currentMax：要么加入前序子数组，要么自己开始
        currentMax = Math.max(nums[i], currentMax + nums[i]);
        // 更新全局最大值
        maxSum = Math.max(maxSum, currentMax);
    }

    return maxSum;
};
maxSubArray([-2,1,-3,4,-1,2,1,-5,4])