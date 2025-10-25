// 思路是：递归
const myFlat=(nums,depth=1)=>{
    const result=[]
    for(let i=0;i<nums.length;i++){
        //如果当前的元素是数组并且depth>0
        if(Array.isArray(nums[i])&&depth>0){
             const flattenedItem = myFlat(nums[i], depth === Infinity ? Infinity : depth - 1);
            result.push(...flattenedItem)
        }else{
            result.push(nums[i])
        }
    }
    return result
}
// 思路：如果下面是数组并且深度>就开始递归，主要考虑depth为0或者是depth为infinity，
const myflat=(nums,depth=1)=>{
    const len=nums.length
    const result=[]
    for(let i=0;i<len;i++){
        if(Array.isArray(nums[i])&&depth>0){
            const flatChildren=myflat(nums[i],depth===Infinity?infinity:depth-1)
            result.push(...flatChildren)
        }else{
            result.push(nums[i])
        }
    }
    return result
}
