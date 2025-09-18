/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//思路：前缀和+哈希表
//前缀和：数组中从开始位置到当前位置的元素和
//哈希表：用来存储前缀和及其出现的次数
//如果当前前缀和减去k在哈希表中存在，说明存在一个子数组的和为k
//时间复杂度：O(n)  空间复杂度：O(n)

var subarraySum = function (nums, k) {
  let count = 0;
  let sum = 0;
  const map = new Map(); //key是前缀和  value是前缀和出现的次数
  map.set(0, 1); //前缀和为0 出现一次  出错过
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]; //计算前缀和 1 2 3
    if (map.has(sum - k)) {
      //如果前缀和减去k在map中存在 说明存在一个子数组的和为k
      count += map.get(sum - k); //把这个前缀和出现的次数加到count中
    }
    map.set(sum, (map.get(sum) || 0) + 1); //把当前前缀和存入map中 (1,1) (2,1) (3,1)
  }
  return count;
};
subarraySum([1, 1, 1], 2);
