/**
 * @param {number[]} hejght
 * @return {number}
 */
//盛最多水的容器
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

