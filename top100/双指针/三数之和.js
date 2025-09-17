console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
//三数之和的思路是先对数组进行排序，然后固定一个数，使用双指针在剩下的数组中寻找另外两个数，使得三数之和为零。通过跳过重复元素来避免重复的结果。
const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // 跳过重复元素
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left]) left++;
        while (left < right && nums[right] === nums[right--]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
};

