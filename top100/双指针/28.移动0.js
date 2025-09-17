/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let j = 0; // j 指向非零元素应放置的位置
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            // 交换非零元素到前面
            if (i !== j) {
                [nums[i], nums[j]] = [nums[j], nums[i]];//重点 0变成3 3变成0
            }
            j++;
        }
    }
    return nums;    
};
console.log(moveZeroes([0,3,12]));
