
//解法一
const reverseWords = function (s) {
    const n = s.length
    let str = ''
    const reverseArr = []
    for (let i = 0; i < n; i++) {
        if (s[i] !== ' ') {
            str += s[i]
            if(s[i+1]===undefined){
                reverseArr.unshift(str)
                break
            }
        }
        else if (s[i - 1] !== ' '&& s[i - 1]!==undefined) {
            reverseArr.unshift(str)
            str = ''
            continue
        }
        
    }
    
    console.log(reverseArr.join(' '))
    return reverseArr.join(' ')

}
reverseWords("  hello world  ")
// 解法二、
function reverseWords(s) {
  const result = [];
  let i = s.length - 1;

  while (i >= 0) {
    // 跳过尾部空格
    while (i >= 0 && s[i] === ' ') i--;
    if (i < 0) break;

    // 找到单词结束位置
    let end = i;
    // 找到单词开始位置
    while (i >= 0 && s[i] !== ' ') i--;

    // 提取单词并加入结果
    result.push(s.slice(i + 1, end + 1));
  }

  return result.join(' ');
}

