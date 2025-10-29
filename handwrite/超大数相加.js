// /**
//  * 超大数相加（字符串形式）
//  * @param {string} a 第一个超大数（字符串）
//  * @param {string} b 第二个超大数（字符串）
//  * @return {string} 相加后的结果（字符串）
//  */
// function addBigNumbers(a, b) {
//     // 反转字符串，方便从低位（原字符串末尾）开始计算
//     const s1 = a.split('').reverse(); // 例如 "123" → ["3", "2", "1"]
//     const s2 = b.split('').reverse(); // 例如 "456" → ["6", "5", "4"]

//     let i = 0; // 遍历s1的索引
//     let j = 0; // 遍历s2的索引
//     let carry = 0; // 进位（初始为0）
//     const result = []; // 存储每一位的计算结果（从低位到高位）

//     // 循环条件：任一字符串未遍历完，或仍有进位
//     while (i < s1.length || j < s2.length || carry > 0) {
//         // 获取当前位的数字（若索引越界则取0）
//         const num1 = i < s1.length ? parseInt(s1[i], 10) : 0;//3
//         const num2 = j < s2.length ? parseInt(s2[j], 10) : 0;//6

//         // 计算当前位的总和（包含进位）
//         const sum = num1 + num2 + carry;

//         // 当前位的结果 = 总和 % 10（取个位）
//         result.push(sum % 10);//9

//         // 更新进位 = 总和 // 10（取十位及以上）
//         carry = Math.floor(sum / 10);//0

//         // 移动索引（继续处理下一位）
//         i++;
//         j++;
//     }

//     // 结果数组是从低位到高位存储的，反转后拼接成字符串
//     return result.reverse().join('');
// }
// addBigNumbers('123','456')
// 超大数相加，要转化成字符串,思路就是从字符串尾部开始相加
function addBigNumbers(a, b) {
  const s1 = a.split("").reverse();
  const s2 = b.split("").reverse();
  let sum = 0;
  let i = 0;
  let j = 0;
  const result = [];
  let carry = 0;
  while (i < s1.length || j < s2.length || carry > 0) {
    //大数如果当前没超过边界
    const num1 = i < s1.length ? parseInt(s1[i], 10) : 0;
    const num2 = j < s2.length ? parseInt(s2[j], 10) : 0;
    // nums1[i]=i<a.length?parseInt(nums1[i],10):0
    // nums2[i]=j<a.length?parseInt(nums2[j],10):0
    sum = num1 + num2 + carry;
    result.push(sum % 10);
    carry = Math.floor(sum / 10);
    i++;
    j++;
  }
}
