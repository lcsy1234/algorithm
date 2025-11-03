//和大于等于k的最短子数组

function minSubArrayLen( a ,  k ) {
    // write code here
    let len = a.length;
    let res = len + 1;
    let sum = 0;
    let left = 0;
    let right = 0;
    while (right < len) {
        sum += a[right];
        while (sum >= k) {
            res = Math.min(res, right - left + 1);
            sum -= a[left];
            left++;
        }
        right++;
    }
    return res === len + 1 ? -1 : res;
}
module.exports = {
    minSubArrayLen : minSubArrayLen
};
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param a int整型一维数组 
 * @param k int整型 
 * @return int整型
 */
function minSubArrayLen( a ,  k ) {
    // write code here
    let len = a.length;
    let res = len + 1;
    let sum = 0;
    let left = 0;
    let right = 0;
    while (right < len) {
        sum += a[right];
        while (sum >= k) {
            res = Math.min(res, right - left + 1);
            sum -= a[left];
            left++;
        }
        right++;
    }
    return res === len + 1 ? 0 : res;
}
module.exports = {
    minSubArrayLen : minSubArrayLen
};
