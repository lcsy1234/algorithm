function canPartition(nums) {
    const n = nums.length;
    // 剪枝1：数组长度<2，无法分割为两个非空子集
    if (n < 2) return false;

    // 计算数组总和
    const totalSum = nums.reduce((acc, curr) => acc + curr, 0);
    // 剪枝2：总和为奇数，无法分割
    if (totalSum % 2 !== 0) return false;

    const target = totalSum / 2; // 目标子集和
    // 剪枝3：存在元素>target，该元素所在子集和必超target，无法分割
    const maxNum = Math.max(...nums);
    if (maxNum > target) return false;

    // 定义dp数组：dp[j]表示「能否用数组元素凑出和为j的子集」
    const dp = new Array(target + 1).fill(false);
    dp[0] = true; // 边界条件：和为0的空子集一定存在

    // 遍历每个元素（相当于0-1背包的「物品」）
    for (const num of nums) {
        // 倒序遍历j（从target到num）：避免同一元素被重复使用
        for (let j = target; j >= num; j--) {
            // 状态转移：dp[j] = 之前已能凑出j，或能凑出j-num（加当前num就凑出j）
            dp[j] = dp[j] || dp[j - num];//11/10  10/9 /

        }
    }

    // dp[target]即是否能凑出目标和
    return dp[target];
}
canPartition([1,5,7,4,5])