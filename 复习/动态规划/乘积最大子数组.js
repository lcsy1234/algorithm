/**
 * 求数组中乘积最大的连续子数组
 * @param {number[]} nums - 输入数组
 * @return {number} 最大乘积
 */
function maxProduct(nums) {
    if (nums.length === 0) return 0;
    
    let prevMax = nums[0]; // 前一个位置的最大乘积
    let prevMin = nums[0]; // 前一个位置的最小乘积（处理负数）
    let maxResult = nums[0]; // 全局最大乘积
    
    for (let i = 1; i < nums.length; i++) {
        const curr = nums[i];
        // 计算当前位置的最大/最小乘积（依赖前一个的max和min）
         prevMax = Math.max(curr, prevMax * curr, prevMin * curr);
         prevMin = Math.min(curr, prevMax * curr, prevMin * curr);
        
        // 更新前一个的max和min为当前值，用于下一轮计算
        prevMax = currMax;
        prevMin = currMin;
        
        // 更新全局最大值
        maxResult = Math.max(maxResult, currMax);
    }
    
    return maxResult;
}