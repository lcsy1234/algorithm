// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
//     nums.sort((a,b)=>a-b)
//     let end=nums.length-1
//     let start=0
//     let sum=0
//    while(start<end){
//     sum=nums[start]+nums[end]
//     if(sum===target){
//         return [start,end]
//     }else if(sum<target){
//         start++

//     }else{
//         end--
//     }
    
//    }
//    return []
// };
// twoSum([2,7,11,15],9)
//上面的解法不能够返回下标而是返回值的时候才使用
const { hash } = require("crypto");
const { hasSubscribers } = require("diagnostics_channel");
//解法二
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashObj={}
    for(let i=0;i<nums.length;i++){
        if(hashObj[target-nums[i]]!==undefined){
            return [i,hashObj[target-nums[i]]]
        }
        hashObj[nums[i]]=i
    }
    return []
};
