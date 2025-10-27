/**
 * @param {number[]} nums
 * @return {number}
 */
//思路就是遍历，如果小的话就，dp[i]是什么当前字符的最大值
var lengthOfLIS = function(nums) {
    const n=nums.length
    if (n===0) return 0
    const dp=new Array(n+1).fill(1)
    let maxLen=1
    for(let i=1;i<n;i++){
        for(let j=0;j<i;j++){
            //就是如果当前的值小于i的话，就可以拼接更长的字符串，就要判断再这个片段里面的最长
           if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        maxLen=Math.max(dp[i],maxLen)
    }
    return maxLen
    
};