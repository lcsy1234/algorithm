var decodeString = function (s) {
  const strStack = [];
  const numStack = [];
  let currentNum = 0;
  let currentStr = "";
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!isNaN(char)) {
      currentNum = currentNum * 10 + Number(char);
    } else if (char === "[") {
      //清空当前的curNum
      numStack.push(currentNum);
      strStack.push(currentStr);
      currentNum = 0;
      currentStr = "";
    } else if (char === "]") {
      //开始计算
      const repeatNum = numStack.pop();
      const prevStr = strStack.pop();
      currentStr = prevStr + currentStr.repeat(repeatNum);
    } else {
      currentStr+=char
    }
  }
  return currentStr
};
// decodeString("3[a]2[bc]");
// 思路：就是如果遇到数字就将它放在curNum中，然后判断如果遇到[就将里面的内容放在curStr，
//然后里面的边界case是内部有[
//然后要开始计算遇到],就计算一波，然后再进入下一步的时候就开始
