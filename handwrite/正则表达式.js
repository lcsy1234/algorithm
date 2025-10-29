//实现trim（）
// 给 String 原型添加自定义 trim 方法（避免覆盖原生，命名为 myTrim）
String.prototype.myTrim = function() {
  // 正则匹配：
  // ^[\s\uFEFF\xA0]+ ：匹配字符串开头的一个或多个空白字符（包括 Unicode 空白）
  // [\s\uFEFF\xA0]+$ ：匹配字符串结尾的一个或多个空白字符
  // 替换为 '' 即去除两端空白
  return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};