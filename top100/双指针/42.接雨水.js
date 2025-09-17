//接雨水，
//思路：双指针，分别指向数组的两端，计算当前面积，并移动较短的一边的指针，直到两指针相遇
// 时间复杂度O(n)，空间复杂度O(1)
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left=0
    let right=height.length-1
    let leftMax=0
    let rightMax=0
    let result=0
    while(left<right){
        if(height[left]<height[right]){
            if(height[left]>=leftMax){
                leftMax=height[left]
            }else{
                result+=leftMax-height[left]
            }
            left++
        }else{
            if(height[right]>=rightMax){
                rightMax=height[right]
            }else{
                result+=rightMax-height[right]
            }
            right--
        }
    }
    return result       
}





const trap=(height)=>{
    const n=height.length
    let left =0
    let right=n-1
    let leftMax=0
    let rightMax=0
    let result=0
while(left<right){
    if(height[left]<height[right]){
        if(height[left]>=leftMax){
            leftMax=height[left]
        }else{
            result+=leftMax-height[left]
        }
        left++
    }else{
        if(height[right]>=rightMax){
            rightMax=height[right]
        }else{
            result+=rightMax-height[right]
        }
        right--
        }
}
return result
}

