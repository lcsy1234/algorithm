// 三数之和，就是双指针
const threeSum = (nums) => {
  // const l
  const result = [];
  const n = nums.length;
  nums.sort()
  for (let i = 0; i < nums.length-2; i++) {
    // 第一个数去重：若当前数与前一个数相同，跳过
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
      } else {
        while (left < right && nums[left] === nums[left++]) left++;
        while (left < right && nums[right] === nums[right--]) right--;
        if (sum < 0) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return result;
};
