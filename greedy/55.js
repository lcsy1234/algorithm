/**
 * @param {number[]} nums
 * @return {boolean}
 */
var jump = function (nums) {
    const n = nums.length
    let count = 0
    let end = 0
    let maxArrive = 0
    for (let i = 0; i < n; i++) {
        maxArrive = Math.max(maxArrive,i+nums[i])
        if(i===end){
            count++
            end=maxArrive
            if(maxArrive>=n-1) break//这一步因为观点是最后一步虽然break但是他要+1因为是最后一步
        }
        //  if(maxArrive>=n-1) break

    }
    return n <= 1 ? 0 : count
};
console.log(jump([2,3,1,1,4]));
