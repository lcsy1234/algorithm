function formatPrice(price) {
  // 创建 Intl.NumberFormat 实例，设置样式为 decimal（数字格式化，包含千分位分隔）
  const formatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
  });
  // 调用 format 方法对价格进行格式化并返回
  return formatter.format(price);
}
// 测试示例
console.log(formatPrice(1234567.89)); // 输出 "1,234,567.89"

function formatPrice(price) {
  const [integerPart, decimalPart] = price.toString().split(".");
  let formattedInteger = "";

  // 从右往左遍历整数部分，每三位加一个逗号
  for (let i = integerPart.length - 1, count = 0; i >= 0; i--, count++) {
    // 每三位（除了开头）插入逗号
    if (count > 0 && count % 3 === 0) {
      formattedInteger = "," + formattedInteger;
    }
    formattedInteger = integerPart[i] + formattedInteger;//?
  }

  // 如果有小数部分，拼接小数；否则直接返回整数部分
  return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
}


