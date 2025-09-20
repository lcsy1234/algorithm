/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const result = new Array(n); // 结果数组（不计入空间复杂度）
    
    // 第一步：计算左侧乘积（result[i] 存储 nums[0..i-1] 的乘积）
    result[0] = 1; // 第一个元素左侧没有元素，乘积为1
    for (let i = 1; i < n; i++) {
        result[i] = result[i - 1] * nums[i - 1];//1*1,1*2,2*3
    }
    
    // 第二步：计算右侧乘积，并与左侧乘积相乘得到最终结果
    let rightProduct = 1; // 记录当前元素右侧的乘积（初始为1，对应最后一个元素右侧无元素）
    for (let i = n - 1; i >= 0; i--) {
        result[i] = result[i] * rightProduct; // 左侧乘积 * 右侧乘积//
        rightProduct *= nums[i]; // 更新右侧乘积（包含当前元素，供下一个左侧元素使用）
    }
    
    return result;
};

// 测试用例
console.log(productExceptSelf([1,2,3,4])); // 输出 [24,12,8,6]
// console.log(productExceptSelf([-1,1,0,-3,3])); // 输出 [0,0,9,0,0]
// console.log(productExceptSelf([2,3])); // 输出 [3,2]
