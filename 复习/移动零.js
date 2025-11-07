/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const arr=[]
    let count=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            arr.push(nums[i])
        }else{
            count++
        }
    }
    const zeroArr=new Array(count).fill(0)
    return arr.concat(zeroArr)
};
console.log(moveZeroes([0,1,0,3,12]))