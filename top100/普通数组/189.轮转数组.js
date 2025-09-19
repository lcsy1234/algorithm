/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 思路：
// 1. 反转整个数组
// 2. 反转前 k 个元素
// 3. 反转后 n-k 个元素
// 时间复杂度：O(n)  空间复杂度：O(1)   
var rotate = function(nums, k) {
    k = k % nums.length; // 处理 k 大于数组长度的情况
    // reverse(nums, 0, nums.length - 1); // 反转整个数组
    console.log("%c Line:14 🍿 reverse", "color:#ed9ec7", reverse(nums, 0, nums.length - 1));
    // reverse(nums, 0, k - 1); // 反转前 k 个元素
    console.log("%c Line:16 🥐 reverse(nums, 0, k - 1);", "color:#4fff4B", reverse(nums, 0, k - 1));
    reverse(nums, k, nums.length - 1); // 反转后 n-k 个元素
};

// 辅助函数：反转数组的指定部分
function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]; // 交换元素
        start++;
        end--;      

    
    };
    return arr
};
console.log(rotate([1,2,3,4,5,6,7],3))
            