
const canJump=(nums)=>{
    const n=nums.length
    let maxArrive=0
    for(let i=0;i<n;i++){
        if(i>maxArrive) return false
        maxArrive=Math.max(maxArrive,nums[i]+i)
        if(maxArrive>=n-1) return true
    }
    return false
}