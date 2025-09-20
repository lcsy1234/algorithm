/**
 * @param {number[]} nums
 * @return {number}
 */
// 思路：
var firstMissingPositive = function(nums) {
    const n = nums.length;
    
    // 第一步：将数字放到正确的位置（i应该放在索引i-1处）
    for (let i = 0; i < n; i++) {
        // 仅处理1~n范围内的正整数，且当前数字不在正确位置时才交换
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
            // 交换nums[i]和nums[nums[i]-1]
            const temp = nums[nums[i] - 1];
            nums[nums[i] - 1] = nums[i];
            nums[i] = temp;
        }
    }
    
    // 第二步：检查每个位置是否有对应的数字
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1; // 找到缺失的最小正整数
        }
    }
    
    // 若所有位置都正确，则缺失的是n+1
    return n + 1;
};

// 测试用例
// console.log(firstMissingPositive([1,2,0])); // 输出3（数组应有的数字是1,2,3，缺失3）
// console.log(firstMissingPositive([3,4,-1,1])); // 输出2（交换后数组为[1,-1,3,4]，索引1处缺失2）
console.log(firstMissingPositive([7,8,9,11,12])); // 输出1（数组中没有1）
// console.log(firstMissingPositive([1])); // 输出2（数组只有1，缺失2）
// console.log(firstMissingPositive([])); // 输出1（空数组默认缺失1）
