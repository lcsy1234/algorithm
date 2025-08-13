// /**
//  * @param {number} x
//  * @return {boolean}
//  */
// var isPalindrome = function(x) {
//     const xStr=String(x)
//     let n=xStr.length
//     let middle=Math.ceil(n/2)
//     for(let i=0,j=n-1;i<middle,j>middle-1;i++,j--){
//         if(xStr[i]!==xStr[j]) return false
//     }
//     return true
// };
function isPalindrome(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
    let reversed = 0;
    // 反转后半段（当 x <= reversed 时，说明已处理一半）
    while (x > reversed) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    // 长度为偶数：x === reversed；长度为奇数：x === Math.floor(reversed / 10)（去掉中间位）
    return x === reversed || x === Math.floor(reversed / 10);
}
console.log(isPalindrome(12321))
