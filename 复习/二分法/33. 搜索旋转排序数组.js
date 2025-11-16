var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    //左边是有序的
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        //target在左边并且比mid小
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};
