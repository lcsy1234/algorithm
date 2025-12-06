/**
 * 贪心+二分查找求最长递增子序列长度
 * @param {number[]} nums - 输入数组
 * @return {number} 最长递增子序列的长度
 */
function lengthOfLIS(nums) {
  if (nums.length === 0) return 0;
  const tails = []; // 存储长度为i+1的子序列的最小结尾元素
  for (const num of nums) {
    // 二分查找：找到tails中第一个 >= num的位置
    let left = 0,
      right = tails.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (tails[mid] < num) {
        left = mid + 1; // 中间元素小于num，只考虑当前元素小于末尾值的
      } else {
        right = mid; // 中间元素 >= num，向左收缩
      }
    }
    // 若找到位置，替换；否则，添加到末尾
    if (left === tails.length) {
      //只要
      tails.push(num);
    } else {
      tails[left] = num;
    }
  }

  return tails.length; // tails的长度即为最长子序列的长度
}
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
// 思路：维护一个数组，如果大于末尾值的话push到末尾
//如果小于末尾值的话，就找到第一个比他大的值进行替换

//动态规划：思路是dp[i]是maxVal的状态，
//状态转移：让当前值与之前的值都进行一一对比， Math.max(dp[i], dp[j] + 1);，dp[i]可能已经存储了之前累计的一个值bi如2357，对比dp【3】+1的时候已经计算了dp【i】=dp【2】+1，
var lengthOfLIS = function (nums) {
  const n = nums.length;
  if (n === 0) return 0;
  const dp = new Array(n + 1).fill(1);
  let maxLen = 1;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      //就是如果当前的值小于i的话，就可以拼接更长的字符串，就要判断再这个片段里面的最长
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    maxLen = Math.max(dp[i], maxLen);
  }
  return maxLen;
};
