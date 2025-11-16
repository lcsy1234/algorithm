function isValid(s) {
  //   silu：就是将括号存起来，然后判断存完，清空左括号
  const map = { ")": "(", "]": "[", "}": "{" };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char in map) {
      if (stack.length === 0 || stack.pop(char) !== map[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}

// 测试案例
console.log(isValid("{[()]}")); // false
