/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const resArr=[...nums1,...nums2]
    resArr.sort((a,b)=>a-b)
    const n= resArr.length
    if(n%2===0){
       return (resArr[n/2]+resArr[n/2-1])/2
    }
    else{
        let zhongweiNum=Math.floor(n/2)//8
        return resArr[zhongweiNum]
    }
};
findMedianSortedArrays([1,2,3,4,5],[6,7,8,9,10,11,12,13,14,15,16,17])
console.log("%c Line:20 🍭 findMedianSortedArrays([1,2,3,4,5],[6,7,8,9,10,11,12,13,14,15,16,17])", "color:#e41a6a", findMedianSortedArrays([1,2,3,4,5],[6,7,8,9,10,11,12,13,14,15,16,17]));