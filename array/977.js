/**
 * @param {number[]} nums
 * @return {number[]}
 */
// O(n)+O(nlog(n))
var sortedSquares = function(nums) {
    let newArr=[]
    for(i=0;i<nums.length;i++){
       newArr.push(nums[i]*nums[i])
    }
    newArr.sort((a,b)=>a-b)
     return newArr

};
sortedSquares([-4,-1,0,3,10])