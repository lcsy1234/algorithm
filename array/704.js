// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// //解法一：暴力解法 O(n)
// var search = function (nums, target) {
//     for (var i = 0; i < nums.length; i++) {
//         if (nums[i] === target) {
//             console.log(i)
//             return i
//         }


//     }
//     return -1;

// };
// search([-1, 0, 3, 5, 9, 12], 9)
//解法二 二分法,[left,right]

var search = function (nums, target) {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {

        let middle = Math.floor((left + right) / 2);
        let num = nums[middle]

        if (num === target) {
            return middle
        }
        else if (num < target) {
            left = middle+1
        }
        else {
            right = middle-1
        }
    }
    return -1


};

search([-1, 0, 3, 5, 9, 12], 2)