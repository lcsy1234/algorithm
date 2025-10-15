//思路：快速排序
const quickSort = (nums) => {
  const len = nums.length;
  if (len <= 1) return nums;
  const mid = nums[Math.floor(len / 2)];
  const left = [];
  const right = [];
  const middle = [];
  for (let i = 0; i < len; i++) {
    if (nums[i] < mid) {
      left.push(nums[i]);
    } else if (nums[i] > mid) {
      right.push(nums[i]);
    } else {
      middle.push(nums[i]);
    }
  }
  return [...quickSort(left), ...middle, ...quickSort(right)];
};
quickSort([9, 6, 7, 3, 4, 2]);


