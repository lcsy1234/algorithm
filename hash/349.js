/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//总结就是把map当做一个字典，能够把分开的资料放进这个字典统一查找。
var intersection = function(nums1, nums2) {
    const numMap=new Map()
    const res=[]
    for (let i=0;i<nums1.length;i++){
        numMap.set(nums1[i],1)
    }
    for(let j=0;j<nums2.length;j++){
        if(numMap.get(nums2[j])) {
            res.push(nums2[j])
            numMap.set(nums2[j],0)
        }
    }
    return res
    
    
};