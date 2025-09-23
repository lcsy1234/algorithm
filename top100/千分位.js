// // 倒序遍历插入法
function formatThousands(dollor) {
  const isNegative = dollor.startsWith("-");
  const [str,decimal]=dollor.split('.')
  const newStr = isNegative ? str.slice(1) : str;
  const reverseStr = newStr.split("").reverse().join("");
  const result = [];
  for (let i = 0; i < reverseStr.length; i++) {
    result.push(reverseStr[i]);
    if ((i + 1) % 3 === 0&& i !== reverseStr.length - 1 ) {
      result.push(",");
    }
  }
  const formatted = result.reverse().join('');
  let finalInteger=isNegative ? `-${formatted}` : formatted;
  return decimal?`${finalInteger}.${decimal}`:finalInteger
}
// function formatThousands(str) {
//   const num = Number(str);
//   return num.toLocaleString();
// }

console.log(formatThousands("111234567.12"));      
