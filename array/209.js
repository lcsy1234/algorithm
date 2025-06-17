// /**
//  * @param {number} s
//  * @param {number[]} nums
//  * @return {number}
//  */
// 暴力解法不合理，因为没有包含所有的可能，就这还超时了。
// var minSubArrayLen = function(s, nums) {
//     const n = nums.length;
//     if (n === 0) {
//         return 0;
//     }
//     let ans = Infinity;
//     for (let i = 0; i < n; i++) {
//         let sum = 0;
//         for (let j = i; j < n; j++) {
//             sum += nums[j];
//             if (sum >= s) {
//                 ans = Math.min(ans, j - i + 1);
//                 break;
//             }
//         }
//     }
//     return ans === Infinity ? 0 : ans;
// };

// minSubArrayLen(7,[2,3,1,2,4,3])
// 解法二
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
// 思路是双指针，因为不知道循环多少次所以用while,难点：代码的先后顺序，进行调试

var minSubArrayLen = function(target, nums) {
    let start=end=0
    let numLen=nums.length
    let sum=0
    let ans=Infinity
    while(end<numLen){
        sum+=num[end]
        while(sum>=target){
            ans=Math.min(Infinity,end-start+1)
            sum-=num[start]
            start++
        }
        end++
    }
    return ans===Infinity?0:ans

  
};
minSubArrayLen(7,[2,3,1,2,4,2])