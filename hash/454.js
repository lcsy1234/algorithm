// 三数之和

const { umask } = require("process");

//[-1,-1,0,1,1]   0 返回的是数组里面包括三个值
function threeSum(nums) {
    let newNums = nums.sort()
    let res = []
    for (let i = 0; i < newNums.length; i++) {
        // if (nums[i] === nums[i - 1]) continue
        if (i > 0 && newNums[i] === newNums[i - 1]) continue;
        let left = i + 1
        let right = newNums.length - 1
        while (left < right) {
            const sum = newNums[i] + newNums[left] + newNums[right];
            if (sum === 0) {
                res.push([newNums[i], newNums[left], newNums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++; right--;
            } else if (sum < 0) left++;
            else right--;
        }
    }
}
threeSum([3, 2, 4, 7, 6, 1], 9)
// 四数之和
//四数相加
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
    let n = nums1.length
    let sum = 0
    let ans = 0
    let froTwoSum = new Map()

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            sum = nums1[i] + nums2[j]
            froTwoSum.set(sum, (froTwoSum.get(sum) || 0) + 1)
        }

    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const minusEndTwo = -nums3[i] - nums4[j]
            if (froTwoSum.has(minusEndTwo)) {
                ans += froTwoSum.get(minusEndTwo)
            }
        }
    }
    return ans
};


