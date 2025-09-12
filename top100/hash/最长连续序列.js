/**
 * @param {number[]} nums
 * @return {number}
 */
//我的思路先去重？在排序，然后遍历，start以及count,但是他是有两个for循环

var longestConsecutive = function(nums) {
   const numsSet=new Set(nums)
   const sortedNums=Array.from(numsSet).sort((a,b)=>a,b)
   let max=1
   let count=1
   for(let i=1;i<nums.length;i++){
    if(sortedNums[i]-sortedNums[i-1]===1){
        count++
        max=Math.max(max,count)
    }else{
        count=1
    }
   }
   return nums.length===0?0:maxCount
};
/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function(nums) {
    const numSet = new Set(nums);
    let longestStreak = 0;
    for (let num of numSet) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }
    return longestStreak;   
};
longestConsecutive([100, 4, 200, 1, 3, 2]);