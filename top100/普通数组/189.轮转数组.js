function rotate(nums,k){
    const n=nums.length
    reverse(nums,0,n-1)
    reverse(nums,0,k-1)
    reverse(nums,k,n-1)
}
function reverse(nums,start,end){
    while(start<end){
        [nums[start],nums[end]]=[nums[end],nums[start]]
        start++
        end--
    }
    return nums
}