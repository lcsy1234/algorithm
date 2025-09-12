// 例 1：两数之和 II（LeetCode 167）
// 问题：给你一个升序排列的数组，找出两个数使它们的和等于目标数。
// 思路：
// 左指针 left 从数组开头出发，右指针 right 从末尾出发。
// 若两数之和等于目标，返回结果；若小于目标，左指针右移（增大和）；若大于目标，右指针左移（减小和）。
function twoSum(numbers, target) {
  let left = 0, right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1]; // 题目要求下标从1开始
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}