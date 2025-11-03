// 最长重复子串
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param a string字符串 待计算字符串
 * @return int整型
 */
function solve( a ) {
    // write code here
    let len = a.length;
    let res = 0;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            let k = 0;
            while (j + k < len && a[i + k] === a[j + k]) {
                k++;
            }
            res = Math.max(res, k);
        }
    }
    return res;
    
}
module.exports = {
    solve : solve

};
//二分法
function solve2(a) {
    let len = a.length;
    let res = 0;
    for (let i = 0; i < len; i++) {
        let left = 0;
        let right = len - i;
        while (left <= right) {
            let mid = (left + right) / 2;
            if (a[i + mid] === a[i + mid - 1]) {
                left = mid;
            } else {
                right = mid - 1;
            }
        }
        res = Math.max(res, left);
    }
    return res;
}
module.exports = {
    solve : solve,
    solve2 : solve2
};
 