/**
 * @param {number[]} nums
 * @return {number}
 */
// 思路：让子序列尽可能长，需要让子序列的末尾元素尽可能小（这样后续元素更容易加入）
//左闭右开区间；    [1,2,3,4] 范围是[0,4)所以长度是tail.length，因为二分法判断的时候
var lengthOfLIS = function(nums) {
    if (nums.length === 0) return 0;
    const tails = []; // tails[i]：长度为i+1的LIS的末尾最小元素

    for (const x of nums) {
        // 二分查找：找到tails中第一个 >= x 的元素索引
        let left = 0, right = tails.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (tails[mid] >= x) {
                right = mid; // 目标在左半部分
            } else {
                left = mid + 1; // 目标在右半部分
            }
        }

        if (left === tails.length) {
            // x 比所有末尾元素大，加入tails
            tails.push(x);
        } else {
            // 替换第一个 >= x 的元素为x，优化末尾元素
            tails[left] = x;
        }
    }

    return tails.length;
};
lengthOfLIS([10,9,2,5,3,7,101,18])
// 动态规划
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length === 0) return 0; // 空数组返回0
    const n = nums.length;
    const dp = new Array(n).fill(1); // dp[i]：以nums[i]结尾的LIS长度
    let maxLen = 1; // 记录全局最长长度

    for (let i = 1; i < n; i++) { // 遍历每个元素（从第2个开始）
        for (let j = 0; j < i; j++) { // 遍历当前元素前面的所有元素
            if (nums[j] < nums[i]) { // 满足递增条件
                dp[i] = Math.max(dp[i], dp[j] + 1); // 更新dp[i]
            }
        }
        maxLen = Math.max(maxLen, dp[i]); // 更新全局最大值
    }

    return maxLen;
};