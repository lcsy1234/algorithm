/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 找到其中的值删掉，然后
var removeElement = function (nums, val) {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            arr.push(nums[i]);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        nums[i] = arr[i];
    }
    console.log(nums)
    return arr.length
};
const nums=[3, 2, 2, 3]
removeElement(nums, 3)
// 方法二
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let left=0
    for (let right=0;right<nums.length;right++){
        if(nums[right]!==val){
            nums[left]=nums[right]
            left++
        }
    }
    return left
};