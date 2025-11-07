 function trap(height) {
        if (height.length < 3) return 0; // 少于3根柱子无法储水
        
        let left = 0;
        let right = height.length - 1;
        let leftMax = height[left]; // 左侧已遍历的最大高度
        let rightMax = height[right]; // 右侧已遍历的最大高度
        let totalWater = 0;
        
        while (left < right) {
            if (leftMax < rightMax) {
                // 左侧最大高度限制储水量，计算left位置的雨水量
                left++;
                leftMax = Math.max(leftMax, height[left]); // 更新左侧最大高度
                totalWater += leftMax - height[left]; // 累加（若为负则加0，因leftMax >= height[left]）
            } else {
                // 右侧最大高度限制储水量，计算right位置的雨水量
                right--;
                rightMax = Math.max(rightMax, height[right]); // 更新右侧最大高度
                totalWater += rightMax - height[right]; // 累加
            }
        }
        return totalWater;
    }
    const trap=(height)=>{
    const n=height.length-1
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
