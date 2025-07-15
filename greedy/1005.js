/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
    nums.sort((a, b) => a - b)
    let sum = 0
    let cur = 0
    let n = nums.length

    for (let i = 0; i < nums.length; i++) {
        //如果负数还有并且k还有救进入，如果负数没有了，k还有并且为奇数,就直接sum-之后直接退出
     
        while (k > 0) {
           if(i>=n ){
            cur=nums[n-1]//2
            k--
           }else{
             cur = nums[i]
            k--
           }
            if ((k + 1) % 2 !== 0 && cur >= 0 && i!==0) {
                let curMIn = Math.min(cur, -nums[i - 1])
                sum += cur-2*curMIn
                i++
                k = 0
                break
            } else if ((k + 1) % 2 === 0 && cur >= 0) {
                sum += cur
                i++
                k = 0
                break
            }
            i++
            sum -= cur
        }

        if (i >= nums.length) { continue }
        //如果k<=0跳出那应该直接加上当前值，而不是加上下一个值
        sum += nums[i]
    }
    return sum
};
console.log(largestSumAfterKNegations([-4,-2,-3], 4));

//[3,-1,0,2]
//代
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var largestSumAfterKNegations = function (nums, k) {
   const n=nums.length
//根据绝对值大小排序，最先反转的是较大的负数
    nums.sort((a, b) => math.abs(b) - math.abs(a))
//开始将负数取正
for(let i=0;i<n;i++){
    if(nums[i]<0){
        nums[i]=-nums[i]
    }
    k--
}
//如果为奇数的话就取最小值反转
if(k%2===1){
    nums[n-1]=-nums[n-1]
}
 return nums.reduce((sum,num)=>sum+num,0)
};

//[3,-1,0,2]
