var canJump = function (nums) {
    let end = 0
    for (let i = 0; i < nums.length; i++) {
        if (i < nums.length - 1) {
            end = Math.max(end, i + nums[i])
        }
        //当前的最大值，i走到了需要判断是否能继续走，
        if (i === end) {
            if (end >= nums.length - 1) {
                return true
            } else {
                return false
            }
        }
    }
    return true
}
console.log(canJump([2, 3, 1, 1, 4]));


//
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    const n = nums.length
    let maxArive = 0
    for (let i = 0; i < n; i++) {
        if (i > maxArive) return false;//这个我没想出来
        maxArive = Math.max(maxArive, i + nums[i])
        if (maxArive >= n - 1) return true
    }
    return false
};
var canJump = function (nums) {
    const n = nums.length
    let maxArive = 0
    for (let i = 0; i < n; i++) {
        if (i > maxArive) return false
        maxArive = Math.max(maxArive, nums[i] + i)
        if (maxArive > n - 1) return true
    }
    return false
};

