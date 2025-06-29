// function getNext(pattern) {
//   const len = pattern.length;
//   const next = new Array(len).fill(0);
//   let j = -1;
//   next[0] = j; // 初始化 next[0] 为 -1
//    // j 初始化为 -1，表示前缀为空
//   for (let i = 1; i < len; i++) {
//     // 当字符不匹配时，j 回退到 next[j] 的位置
//     while (j >= 0 && pattern[i] !== pattern[j + 1]) {
//       j = next[j];
//     }
//     // 当字符匹配时，j 加 1 均往下面移动；因为前面的已经相等了，就看到末尾是否一致相等
//     if (pattern[i] === pattern[j + 1]) {
//       j++;
//     }
//     // 记录当前位置的 next 值
//     next[i] = j;
//   }
//   console.log(next)
//   return next;
// }
// // nextMatch([ -1, -1, -1, 0, -1 ],"mississippi","issip")
// getNext('issip')
// nextMatch([ -1, -1, -1, 0, -1 ],"mississippi","issip")

// // 示例：计算模式串 "ABABCABAB" 的 -1 版本前缀表
// console.log(getNext("issip")); // 输出: [-1, 0, 0, 1, 2, 0, 1, 2, 3]
// const nextMatch=function(next,haystack,needle){
//     let j = -1;
//     for (let i = 0; i < haystack.length; ++i) {
//         while (j >= 0 && haystack[i] !== needle[j + 1])
//             j = next[j];
//         if (haystack[i] === needle[j + 1])
//             j++;
//         if (j === needle.length - 1){
//             console.log(i - needle.length + 1)
//             return (i - needle.length + 1);
//         }
//     }
    
//     return -1
// }
// nextMatch([ -1, -1, -1, 0, -1 ],"mississippi","issip")
const getNext = (needle) => {
        let next = [];
        let j = -1;
        next.push(j);

        for (let i = 1; i < needle.length; ++i) {
            while (j >= 0 && needle[i] !== needle[j + 1])
                j = next[j];
            if (needle[i] === needle[j + 1])
                j++;
            next.push(j);
        }
        console.log(next)

        return next;
    }
   getNext('issip') 