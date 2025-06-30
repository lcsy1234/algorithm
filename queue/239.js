/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let left = 0
    let right = 0
    const arr = []
    let max = nums[0]
    while (right < nums.length - 1||(right<nums.length && k===1)) {
       if(k===1){
        arr.push(nums[right])
       }
        right++
        if (nums[right] >= max) {
            max = nums[right] 
        }
      
        if (k !== 1 && right - left + 1 === k) {
            arr.push(max)
            left++
            max = nums[left]
            right = left
        }

    }
    console.log(arr)
    return arr
};
maxSlidingWindow([1], 1)
//上一道超出时间限制，可以选择使用单调队列
var maxSlidingWindow = function(nums, k) {
    const result = [];
    const deque = []; // 存储元素下标，队首始终是当前窗口的最大值下标
    
    for (let i = 0; i < nums.length; i++) {
        // 移除窗口外的元素下标
        if (deque.length > 0 && deque[0] <= i - k) {
            deque.shift();
        }
        // 移除队列中所有小于当前元素的下标，确保队列降序
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }
        // 添加当前元素下标到队列
        deque.push(i);
        // 当窗口形成后，记录最大值
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }
    
    return result;
};

