var largestSumAfterKNegations = function (nums, k) {
    // 1. 按绝对值从大到小排序（处理负数时优先翻转绝对值大的）
    nums.sort((a, b) => Math.abs(b) - Math.abs(a));
    console.log(nums)   

    // 2. 处理负数：从绝对值大到小依次翻转
    for (let i = 0; i < nums.length && k > 0; i++) {
        if (nums[i] < 0) {
            nums[i] = -nums[i];
            k--;
        }
    }

    // 3. 处理剩余的k：若k为奇数，翻转最小的元素
    if (k > 0 && k % 2 === 1) {
        nums[nums.length - 1] = -nums[nums.length - 1];
    }
    // 4. 计算总和
    return nums.reduce((sum, num) => sum + num, 0);
};
console.log(largestSumAfterKNegations([3, -1, 0, 2], 1));

var largestSumAfterKNegations = function (nums, k) {
    nums.sort((a, b) => Math.abs(b) - Math.abs(a));
    console.log(nums)
    const n = nums.length
    //这样做要考虑0在最后面，所以从前往后
    for (let i = n - 1; i >=n-k; i--) {
        if (i < 0) {
            nums[i] = -nums[i]
        } else if (i > 0 && k % 2 !== 0) {
            nums[n - 1] = -nums[n - 1]
            break
        } else if (i > 0 && k % 2 === 0) {
            break
        }
    }
    return nums.reduce((sum, num) => sum + num, 0)
};

console.log(largestSumAfterKNegations([3, 2, -1, 0],3));
