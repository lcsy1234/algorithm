// /**
//  * @param {number} target
//  * @param {number[]} nums
//  * @return {number}
//  */
// // if(首先是让所有值都按照从少数相加到多数相加加一遍看是否有等于target的值
// // ，有的话列出来，然后将这几个数组的长度排序，取最小)
// // 怎么计算数组的和
// // 最大的相加是n的话，怎么执行到最大的相加难道是n个循环叠加吗？三个四个相加到n
// // 两个相加得到生成三个值的和怎么爽值加上第一个循环，每次加完都判断一下，
// var minSubArrayLen = function (target, nums) {
//     let doubleSum = 0
//     // let numLenth=nums.length
//     let maxCircle = nums.length
//     for (let j = 0; j < maxCircle; j++) {

//         if (nums[j] === target) {
//             return 1
//         }

//         else {


//             for (let i = j + 1; i < maxCircle; i++) {
//                 doubleSum = num[i] + num[j]
//                 if (doubleSum === target) {
//                     return 2
//                 }




//             }
//             while (n <= maxCircle) {
//                 doubleSum = doubleSum + nums[j]
//             }
//         }
//     }


// };

// minSubArrayLen(7, [2, 3, 1, 2, 4, 3])
// 先循环一遍得到第一个值是否得到
// 再循环得到一个和
// 然后继续接着循环
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let maxCircula=nums.length
    let sum=0
  
   for(let i=0;i<maxCircula;i++){
    if(nums[i]===target){
        return 1
    }
    else{
        sum+

    }

     
   }
    
};