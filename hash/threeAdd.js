/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b)
    let n=nums.length
    let res=[]
    for(let i=0;i<n;i++){
        let sum=0
       let left=i+1
       let right=n-1
       if(i>0 && nums[i]===nums[i-1]) continue
        while(left<right){
            sum=nums[i]+nums[left]+nums[right]
            if(sum===0){
                res.push([nums[i],nums[left],nums[right]])
                while(left<right && nums[left]===nums[left+1]){ left++}
                 while(left<right && nums[right-1]===nums[right]){ right--}
                 left++;
                 right--
            }else if(sum<0){
                left++
            }else{
                right--
                
            }
        }
    }
    return res
};
threeSum([-1,0,1,2,-1,-4])
// // 解法二
// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var threeSum = function(nums) {
//    let setNums=new Set(nums.sort())
//    const n=setNums.size
//    const res=[]
//    for(let i=0;i<n;i++){
//     let left=i+1
//     let right=n-1
//     let sum=0
//     while(left<right){
//         sum=setNums[i]+setNums[left]+setNums[right]
//         if(sum===0){
//             res.push([setNums[i],setNums[left],setNums[right]])
//             left ++
//             right--
//         }else if(sum<0){
//             left++
//         }else{
//             right--
//         }
//     }
    
//    }
//    return res

// };
// threeSum([-1,0,1,2,-1,-4])