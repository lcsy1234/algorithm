function isValid(s) {
  const map={')':'(',']':'[','}':'{'}
  const stack=[]
  for(let i=0;i<s.length;i++){
    let char=s[i]
    if(char in map){
        if(stack.length===0||stack.pop()!==map[char]){
            return false
        }
    }else{
         stack.push(char)
    }
  }
  return stack.length===0
}

// 测试案例
console.log(isValid("()[]{}")); // true
// console.log(isValid("([)]"));    // false
