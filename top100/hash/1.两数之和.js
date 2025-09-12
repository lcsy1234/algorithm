/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numsMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complete = target - nums[i];
    if (numsMap.has(complete)) {
      return [numsMap.get(complete), i];
    }
    numsMap.set(nums[i], i);
  }
};
