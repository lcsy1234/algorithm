/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 解法1:找到一个target然后向旁边找到同样的取值，因为按照顺序排列，所以target都集中在一起，所以按照找到同样的值边界来处理
// O(log(n))+O(n) => O(n)
var searchRange = function (nums, target) {
    let left = 0
    let right = nums.length - 1
    let index = -1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        let num = nums[mid]

        if (num === target) {
            index = mid
            break
        }
        else if (num < target) {
            left = mid + 1
        }
        else {
            right = mid - 1
        }
    }

    if (index === -1) {
        return [-1, -1]
    }
    let leftIndex = index, rightIndex = index
    while (nums[leftIndex] === target) {
        leftIndex--
    }
    while (nums[rightIndex] === target) {
        rightIndex++
    }
    return [leftIndex + 1, rightIndex - 1]

};

function search(nums, target, findLeft) {
    let left = 0, right = nums.length - 1;
    let ans = -1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        const num = nums[mid]
        if (num === target) {
            ans = mid;
            if (findLeft) {
                right = mid - 1;
            }
            else {
                left = mid + 1;
            }
        }
        else if (num < target) {
            left = mid + 1
        }
        else {
            right = mid - 1
        }
    }
    return ans;
}
// O(logn) = logn + logn
var searchRange = function (nums, target) {
    const left = search(nums, target, true);
    const right = search(nums, target, false);
    return [left, right]
};
searchRange([1, 2, 3, 3, 3, 3, 3, 3, 3, 4, 5, 6, 7, 9], 3)