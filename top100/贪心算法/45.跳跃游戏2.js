var jump = function (nums) {
    let end=0
    let maxArrive=0
    const n=nums.length
    let count=0
    for(let i=0;i<n;i++){
        maxArrive=Math.max(maxArrive,nums[i]+i)
        if(i===end){
            count++
            end=maxArrive
            if(maxArrive>=n-1) break
        }
    }
    return n <= 1 ? 0 : count
}