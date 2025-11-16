var searchRange = function (nums, target) {
  function borderFind(nums, target, border) {
    let left = 0;
    let right = nums.length - 1;
    let res = -1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        res = mid;
        border === "left" ? (right = mid - 1) : (left = mid + 1);
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return res;
  }
  const leftIdx = borderFind(nums, target, "left");
  const rightIdx = borderFind(nums, target, "right");
  return [leftIdx, rightIdx];
};
