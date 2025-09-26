// /**
//  * @param {string} s
//  * @return {string}
//  */
// var decodeString = function (s) {
//   let numStack = []; // 存储倍数的栈
//   let strStack = []; // 存储字符串的栈
//   let currentNum = 0; // 当前倍数
//   let currentStr = ""; // 当前字符串

//   for (let i = 0; i < s.length; i++) {
//     const char = s[i];
//     if (!isNaN(char)) {
//       // 处理多位数（如"123"需解析为123）
//       currentNum = currentNum * 10 + Number(char);
//     } else if (char === "[") {
//       // 左括号：入栈当前状态，重置当前值
//       numStack.push(currentNum);
//       strStack.push(currentStr);
//       currentNum = 0;
//       currentStr = "";
//     } else if (char === "]") {
//       // 右括号：出栈并计算重复字符串
//       const repeatNum = numStack.pop();
//       const prevStr = strStack.pop();
//       // 当前字符串重复repeatNum次后，与上一层字符串拼接
//       currentStr = prevStr + currentStr.repeat(repeatNum);
//     } else {
//       // 普通字符：直接拼接到当前字符串
//       currentStr += char;
//     }
//   }

//   return currentStr;
// };

// // 测试案例
// console.log(decodeString("abc3[cd]xyz")); // "aaabcbc"
// 思路：首先是记录倍数和字符串个放在一个栈里，最后拼接
var decodeString = function (s) {
  const numStack = [];
  const strStack = [];
  let currentNum = 0;
  let currentStr = "";
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (!isNaN(char)) {
      currentNum = currentNum * 10 + Number(char);
    } else if ((char === "[")) {
      numStack.push(currentNum);
      strStack.push(currentStr);
      currentNum = 0;
      currentStr = "";
    } else if ((char ==="]")) {
      const repeatNum = numStack.pop();
      const prevStr = strStack.pop();
      currentStr = prevStr + currentStr.repeat(repeatNum);
    } else {
      currentStr += char;
    }
  }

  return currentStr;
};
decodeString("3[a]2[bc]")

