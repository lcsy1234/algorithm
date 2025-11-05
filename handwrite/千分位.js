// function formatPrice(price) {
//   // 创建 Intl.NumberFormat 实例，设置样式为 decimal（数字格式化，包含千分位分隔）
//   const formatter = new Intl.NumberFormat("en-US", {
//     style: "decimal",
//   });
//   // 调用 format 方法对价格进行格式化并返回
//   return formatter.format(price);
// }
// // 测试示例
// console.log(formatPrice(1234567.89)); // 输出 "1,234,567.89"

// function formatPrice(price) {
//   const [integerPart, decimalPart] = price.toString().split(".");
//   let formattedInteger = "";

//   // 从右往左遍历整数部分，每三位加一个逗号
//   for (let i = integerPart.length - 1, count = 0; i >= 0; i--, count++) {
//     // 每三位（除了开头）插入逗号
//     if (count > 0 && count % 3 === 0) {
//       formattedInteger = "," + formattedInteger;
//     }
//     formattedInteger = integerPart[i] + formattedInteger;//?
//   }

//   // 如果有小数部分，拼接小数；否则直接返回整数部分
//   return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
// }
// //千分位的思路是将小数点形式，改为千分位的形式，就是从各位开始，现将小数点与整数进行拆分，
// 1234
// const local=(nums)=>{
//   const [integer,decimal]=nums.toString().split('.')
//   const resStr=''
//   let count=0
//   for(let i=integer.length-1;i>=0;i--){
//     if(count%3===0&&i!==0){
//       resStr=','+resStr
//     }else{
//       resStr=nums[i]+resStr // 34
//     }
//     count++
//   }
//   return decimal?resStr+decimal:resStr
// }
//问题：将数字转化成为千分位
//思路：将代码从有到左
function toLocaleFun(nums) {
  let n = nums.length;
  let resStr = "";
  let count = 0;
  const [integer, decimal] = nums.split(".");
  for (let i = integer.length - 1; i >= 0; i--) {
    if (count % 3 === 0 && i !== 0) {
      resStr = "," + resStr;
    } else {
      resStr = nums[i] + resStr; // 34
    }
    count++
  }
  return resStr
}
