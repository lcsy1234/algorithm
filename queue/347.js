/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums,k) {
    const wholeMap = new Map()
    let n = nums.length
    const res =[]
    for (let i = 0; i < n; i++) {
        let getMapValue = wholeMap.get(nums[i])
        wholeMap.set(nums[i], getMapValue?(getMapValue+1):1)
    }
    const arr=Array.from(wholeMap.entries())
    arr.sort((a,b)=>b[1]-a[1])
    for(let i = 0; i < k; i++){
        res.push(arr[i][0])
    }
    return res
};
topKFrequent([1,1,1,2,2,3],2)