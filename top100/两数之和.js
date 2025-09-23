// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

// // 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
// // 你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。
// // 你可以按任意顺序返回答案。
// // 思路：是遍历数组，每次将数组的值赋进去，然后判断如果满足target-i
// // 这个返回时满足条件的值
// var twoSum=function(nums,target){
// const hashObj={}
// for(let i=0;i<nums.length;i++){
//     if(nums[i]===hashObj[nums[i]]){
//         return [nums[i],target-hashObj[nums[i]]]
//     }
//     hashObj[target-nums[i]]=target-nums[i]
// }
// return []
// }
// var twoSum = function (nums, target) {
//   let hashObj = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (hashObj[target - nums[i]] !== undefined) {
//       return [i, hashObj[target - nums[i]]];
//     }
//     hashObj[nums[i]] = i;
//   }
//   return [];
// };
// const twoSum = function (nums, target) {
//   const hashObj = {};
//   for (let i = 0; i < 0; i++) {
//     if (hashObj[target - nums[i]] !== undefined) {
//       return [nums[i], target - nums[i]];
//     }
//     hashObj[nums[i]] = i;
//   }
//   return [];
// };
// twoSum([1, 2, 4, 7], 9);
const threeSum = function (nums) {
  const n = nums.length;
  const result = [];
  if (n < 3) return result;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      // if (nums[i] > 0) break;
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
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
console.log(threeSum([-1, 0, 1]));
