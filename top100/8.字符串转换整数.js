/**
 * 将字符串转换为32位有符号整数
 * @param {string} s - 待转换的字符串
 * @return {number} - 转换后的整数（在32位有符号整数范围内）
 */
var myAtoi = function(s) {
    // 定义32位有符号整数的边界值
    const MAX_VALUE = 2 **31 - 1; // 2147483647
    const MIN_VALUE = - (2** 31); // -2147483648
    
    let index = 0; // 字符串遍历指针
    let sign = 1; // 符号标识：1为正，-1为负
    let result = 0; // 转换结果
    
    // 1. 跳过前导空格
    while (index < s.length && s[index] === ' ') {
        index++;
    }
    
    // 2. 处理符号位（+ 或 -）
    if (index < s.length && (s[index] === '+' || s[index] === '-')) {
        sign = s[index] === '+' ? 1 : -1;
        index++; // 移动到符号位后一位
    }
    
    // 3. 提取连续数字并转换
    while (index < s.length) {
        // 获取当前字符的数字值
        const digit = s.charCodeAt(index) - '0'.charCodeAt(0);
        
        // 若不是有效数字（0-9），停止转换
        if (digit < 0 || digit > 9) {
            break;
        }
        
        // 4. 检查是否溢出（提前判断，避免数值超过安全范围）
        // 情况1：当前结果乘以10后会超过最大值
        // 情况2：当前结果等于最大值/10，且下一位数字大于7（最大值末位为7）
        if (
            result > Math.floor(MAX_VALUE / 10) || 
            (result === Math.floor(MAX_VALUE / 10) && digit > 7)
        ) {
            return sign === 1 ? MAX_VALUE : MIN_VALUE;
        }
        
        // 累加数字（更新结果）
        result = result * 10 + digit;
        index++;
    }
    
    // 返回带符号的结果
    return sign * result;
};
console.log(myAtoi("+-91283472332"))