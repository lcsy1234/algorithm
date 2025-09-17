/**
 * @param {number[]} hejght
 * @return {number}
 */
//盛最多水的容器
// 思路：

var maxArea = function(height) {
    let vocity=0
    for(let i=0;i<height.length;i++){
          for(let j=i+1;j<height.length;j++){
            let min=Math.min(height[i],height[j])
            vocity=Math.max((j-i)*min,vocity)
    }
    }
    return vocity
};

//双指针写法
var maxArea = function(height) {
    let vocity=0
    let left=0
    let right=height.length-1
    while(left<right){
        let min=Math.min(height[left],height[right])
        vocity=Math.max((right-left)*min,vocity)
        if(height[left]<height[right]){
            left++
        }else{
            right--
        }
    }
    return vocity
}



