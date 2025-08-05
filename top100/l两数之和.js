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
}
// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。
// 你可以按任意顺序返回答案。
// 思路：是遍历数组，每次将数组的值赋进去，然后判断如果满足target-i
// 这个返回时满足条件的值
var twoSum=function(nums,target){
const hashObj={}
for(let i=0;i<nums.length;i++){
    if(nums[i]===hashObj[nums[i]]){
        return [nums[i],target-hashObj[nums[i]]]
    }
    hashObj[target-nums[i]]=target-nums[i]
}
return []
}
//这个是满足条件的索引
var twoSum=function(nums,target){
const hashObj={}
//存下当前的索引，如果对象中有满足条件的对象名
for(let i=0;i<nums.length;i++){
    if(hashObj[nums[i]]!==undefined){
        return [i,hashObj[nums[i]]]
    }
    hashObj[target-nums[i]]=i
}
return []
}