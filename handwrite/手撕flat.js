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
// 思路：如果下面是数组并且深度>1就开始递归，并且将数组中的nums[i],depth,
