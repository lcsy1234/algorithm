var productExceptSelf = function(nums) {
    let n=nums.length
    const result=[]
    result[0]=1
    for(let i=1;i<n;i++){
        result[i]=nums[i-1]*result[i-1]//[1,1,2,6] 
    }
    let rightPlus=1
    for(let i=n-1;i>=0;i--){
        result[i]*=rightPlus
        rightPlus*=nums[i]
    }
    return result 
};
productExceptSelf([1,2,3,4])
