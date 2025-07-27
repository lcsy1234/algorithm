/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function(n) {
    // 将数字转换为字符数组便于处理
    let arr = n.toString().split('').map(Number);
    let len = arr.length;
    let i = 1;
    
    // 找到第一个不满足递增的位置
    while (i < len && arr[i-1] <= arr[i]) {
        i++;
    }
    
    // 如果存在不满足递增的位置
    if (i < len) {
        // 向前回溯调整，确保前一位减1后仍然满足递增
        while (i > 0 && arr[i-1] > arr[i]) {
            arr[i-1]--;//
            i--;//2
        }
        
        // 将调整位置后的所有数字都设为9（贪心选择，最大化数值）
        for (let j = i + 1; j < len; j++) {
            arr[j] = 9;
        }
    }
    
    // 将字符数组转换回数字
    return parseInt(arr.join(''), 10);
};

console.log(monotoneIncreasingDigits(332));    // 输出: 999
