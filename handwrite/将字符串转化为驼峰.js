//字符串转化为驼峰
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param sName string字符串 待转化字符串
 * @return string字符串
 */
//这个通过的测试用例太少了
//测试用例:"-webkit-box-sizing"

function cssStyle2DomStyle( sName ) {
    // write code here
    if (!sName) return '';
    
    // 如果以连字符开头，去掉第一个连字符
    if (sName[0] === '-') {
        sName = sName.substring(1);
    }
    
    let len = sName.length;
    let res = '';
    for (let i = 0; i < len; i++) {
        if (sName[i] === '-') {
            i++;
            if (i < len) { // 确保不会越界
                res += sName[i].toUpperCase();
            }
        } else {
            res += sName[i];
        }
    }
    return res;
}
module.exports = {
    cssStyle2DomStyle : cssStyle2DomStyle
};